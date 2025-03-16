import express from 'express';
import bodyParser from 'body-parser';
import { getExpenses, addExpense } from './expenses.js';

const app = express();
const port = 3865;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to set CORS headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all domains
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); // Allow GET and POST requests
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow Content-Type header
  next();
});

// GET route to fetch expenses
app.get('/expenses', async (req, res) => {
  try {
    const expensesData = await getExpenses();
    res.status(200).json({ expenses: expensesData });
  } catch (error) {
    console.error('Error reading expenses data:', error);
    res.status(500).send('Error reading expenses data');
  }
});

// POST route to add a new expense
app.post('/add-expense', async (req, res) => {
  try {
    const expenseData = req.body;
    const newExpense = {
      ...expenseData,
      id: (Math.random() * 1000).toString(),
    };

    await addExpense(newExpense);
    res.status(201).json({ message: 'Expense is added', expense: newExpense });
  } catch (error) {
    console.error('Error adding expense:', error);
    res.status(500).send('Error adding expense');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server connected on port ${port}`);
});
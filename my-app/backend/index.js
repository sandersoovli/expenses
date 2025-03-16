import express from 'express';
import bodyParser from 'body-parser';
import { promises as fs } from 'fs';
import path from 'path';

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
    const filePath = path.join(__dirname, 'data', 'expenses.json');
    const fileContent = await fs.readFile(filePath, 'utf8');
    const expensesData = JSON.parse(fileContent);
    res.status(200).json({ expenses: expensesData });
  } catch (error) {
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

    const filePath = path.join(__dirname, 'data', 'expenses.json');
    const fileContent = await fs.readFile(filePath, 'utf8');
    const expensesData = JSON.parse(fileContent);
    expensesData.push(newExpense);

    await fs.writeFile(filePath, JSON.stringify(expensesData));
    res.status(201).json({ message: 'Expense is added', expense: newExpense });
  } catch (error) {
    res.status(500).send('Error adding expense');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server connected on port ${port}`);
});
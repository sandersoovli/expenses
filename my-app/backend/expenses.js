import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'data', 'expenses.json');

export const getExpenses = async () => {
  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    const expensesData = JSON.parse(fileContent);
    return expensesData;
  } catch (error) {
    console.error('Error reading expenses data:', error);
    throw new Error('Error reading expenses data');
  }
};

export const addExpense = async (newExpense) => {
  try {
    const expensesData = await getExpenses();
    expensesData.push(newExpense);
    await fs.writeFile(filePath, JSON.stringify(expensesData, null, 2));
  } catch (error) {
    console.error('Error adding expense:', error);
    throw new Error('Error adding expense');
  }
};


import React, { useState } from 'react';
import ExpenseItem from './components/ExpenseItem';
import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const [expenses, setExpenses] = useState([ 
  {
    id: 'e1',
    date: new Date(2024, 10, 12),
    title: 'New book',
    price: 30.99
  }, 
  {
    id: 'e2',
    date: new Date(2024, 10, 12),
    title: 'New jeans',
    price: 99.99
  } 
]);
  
const addExpenseHandler = (expense) => {
  setExpenses((prevExpenses) => [expense, ...prevExpenses]); // ✅ Lisame uue kulu listi
};
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App

import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses.jsx';
import NewExpense from './components/NewExpense/NewExpense.jsx';

const App = () => {
  const [expenses, setExpenses] = useState([
    // Your initial expenses data
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
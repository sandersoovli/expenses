import React, { useState } from 'react';
import ExpensesFilter from "./Expenses/ExpensesFilter.jsx";
import ExpensesList from './ExpensesList.jsx';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString());

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const expenses = props.items || [];

  const filteredExpenses = expenses.filter(expense => 
    new Date(expense.date).getFullYear().toString() === filteredYear
  );

  return (
    <div className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesList items={filteredExpenses} />
    </div>
  );
};

export default Expenses;
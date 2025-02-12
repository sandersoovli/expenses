import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem.jsx';
import ExpensesFilter from '../components/Expenses/ExpensesFilter.jsx';
import ExpensesList from './ExpensesList'; // Or import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2024');

  const filterChangeHandler = (selectedYear) => {
    console.log('Selected Year:', selectedYear);
    setFilteredYear(selectedYear);
  };



  // Filter expenses based on the selected year
  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear; 
  });


  // Check props to see what data is coming in
  console.log(props);

  return (
    <div className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesList items={filteredExpenses} />
    </div>
  );
};

export default Expenses;

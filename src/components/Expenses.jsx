import React, { useState } from 'react';
import ExpensesFilter from '../components/Expenses/ExpensesFilter.jsx';
import ExpensesList from './ExpensesList'; 
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2024');

  const filterChangeHandler = (selectedYear) => {
    console.log('Selected Year:', selectedYear);
    setFilteredYear(selectedYear);
  };

    // ✅ Kontrollime, kas props.expenses on määratud, kui ei, kasutame tühja massiivi
    const expenses = props.expenses || [];

  const filteredExpenses = expenses.filter(expense => 
    expense.date?.getFullYear().toString() === filteredYear
  );
  console.log(props.expenses)
  return (
    <div className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesList items={filteredExpenses} />
    </div>
  );
};

export default Expenses;

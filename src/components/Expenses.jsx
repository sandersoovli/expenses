import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem.jsx';
import ExpensesFilter from '../components/Expenses/ExpensesFilter.jsx';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2024');

  const filterChangeHandler = (selectedYear) => {
    console.log('Selected Year:', selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  console.log(props);

  return (
    <div className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id} // Unikaalne võti iga elemendi jaoks.
          data={expense} // Saadame ExpenseItem-le ühe kulu objekti.
        />
      ))}
    </div>
  );
};

export default Expenses;

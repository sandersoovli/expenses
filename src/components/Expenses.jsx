import React from 'react';
import ExpenseItem from './ExpenseItem.jsx';
import './Expenses.css';

const Expenses = (props) => {
  // Kontrollime saabunud props-e, et näha, mis andmed komponendile jõuavad.
  console.log(props);

  return (
    <div className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id} // Unikaalne võti iga elemendi jaoks.
          data={expense} // Saadame ExpenseItem-le ühe kulu objekti.
        />
      ))}
    </div>
  );
};

export default Expenses;

import React from 'react';
import ExpenseItem from './ExpenseItem.jsx';
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.isLoading) {
    return <p className="expenses-list__fallback"><b>Fetching expenses data...</b></p>;
  }

  if (props.items.length === 0) {
    return <p className="expenses-list__fallback">No expenses found.</p>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
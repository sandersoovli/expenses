import React from 'react';
import ExpenseItem from './ExpenseItem.jsx';
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.isLoading) {
    return <h2 className="expenses-list__fallback">Loading...</h2>;
  }

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
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
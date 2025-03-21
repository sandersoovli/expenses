import React, { useState, useEffect } from 'react';
import './ExpenseDate.css';

function ExpenseDate(props) {
  const [date, setDate] = useState(new Date(props.date));

  useEffect(() => {
    setDate(new Date(props.date));
  }, [props.date]);

  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__day'>{day}</div>
      <div className='expense-date__year'>{year}</div>
    </div>
  );
}

export default ExpenseDate;
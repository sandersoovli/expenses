import { useState } from 'react';
import '../NewExpense/ExpenseFrom.css';

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
      enteredTitle: '',
      enteredPrice: '',
      enteredDate: ''
    });
  
    const titleChangeHandler = (event) => {
      setUserInput((prevState) => ({
        ...prevState,
        enteredTitle: event.target.value
      }));
    };
  
    const priceChangeHandler = (event) => {
      setUserInput((prevState) => ({
        ...prevState,
        enteredPrice: event.target.value
      }));
    };
  
    const dateChangeHandler = (event) => {
      setUserInput((prevState) => ({
        ...prevState,
        enteredDate: event.target.value
      }));
    };
  
    const submitHandler = (event) => {
      event.preventDefault();
  
      const expenseData = {
        id: Math.random().toString(),
        title: userInput.enteredTitle,
        price: parseFloat(userInput.enteredPrice),
        date: new Date(userInput.enteredDate)
      };
  
      // Kontrollige, et funktsioon on määratud enne selle kutsumist
      if (props.onSaveExpenseData) {
        props.onSaveExpenseData(expenseData); // Siin edastame andmed tagasi App.js
      }
  
      // Tühjendame vormi väljad
      setUserInput({
        enteredTitle: '',
        enteredPrice: '',
        enteredDate: ''
      });
    };
  
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={userInput.enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Price</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={userInput.enteredPrice}
              onChange={priceChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={userInput.enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  };
  
  export default ExpenseForm;
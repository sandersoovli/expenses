import { useRef, useState, Fragment } from "react";
import "./ExpenseForm.css";
import Error from "../../UI/ErrorModal";

const ExpenseForm = (props) => {
  const [error, setError] = useState(null);

  const titleInputRef = useRef();
  const amountInputRef = useRef();
  const dateInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredAmount = amountInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    // Validate entered amount
    if (
      enteredTitle.trim().length === 0 ||
      enteredAmount.trim().length === 0 ||
      enteredDate.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid title, amount, and date (non-empty values).",
      });
      return;
    }

    const amount = parseFloat(enteredAmount);
    if (isNaN(amount) || amount <= 0) {
      setError({
        title: "Invalid amount",
        message: "Please enter a valid amount greater than zero.",
      });
      return;
    }

    const expenseData = {
      title: enteredTitle,
      amount: amount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    props.onCancel();

    // Clear input fields
    titleInputRef.current.value = "";
    amountInputRef.current.value = "";
    dateInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" ref={titleInputRef} />
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              id="amount"
              ref={amountInputRef}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2025-12-31"
              id="date"
              ref={dateInputRef}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </Fragment>
  );
};

export default ExpenseForm;
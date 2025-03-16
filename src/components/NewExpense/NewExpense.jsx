import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm.jsx";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  // Define the function that will handle the data from ExpenseForm
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false); // Hide form after data is saved
    // You can perform operations here, such as updating the state or sending data to a server
    console.log('Saved expense data:', enteredExpenseData);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler} // ✅ Passing Cancel prop
        />
      )}
    </div>
  );
};

export default NewExpense;

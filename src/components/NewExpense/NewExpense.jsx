import ExpenseForm from "./ExpenseForm.jsx"
import "./NewExpense.css";

const NewExpense = (props) => {
    // Define the function that will handle the data from ExpenseForm
    const saveExpenseDataHandler = (enteredExpenseData) => {
        // You can perform operations here, such as updating the state or sending data to a server
        console.log('Saved expense data:', enteredExpenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;
import React, { useState, useEffect } from 'react';
import './App.css';
import Expenses from './components/Expenses.jsx';
import NewExpense from './components/NewExpense/NewExpense.jsx';
import Error from './UI/Error'; // Ensure you have an Error component

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true);
      try {
        const response = await fetch('http://localhost:3865/expenses');
        if (!response.ok) {
          throw new Error('Failed fetching data');
        }
        const responseData = await response.json();
        const loadedExpenses = responseData.expenses.map(expense => ({
          ...expense,
          date: new Date(expense.date)
        }));
        setExpenses(loadedExpenses);
      } catch (error) {
        setError({
          title: 'An error occurred!',
          message: 'Failed fetching expenses data, please try again later.'
        });
        setShowError(true);
      }
      setIsFetching(false);
    };

    getExpenses();
  }, []);

  const addExpenseHandler = (expense) => {
    const addExpense = async (expense) => {
      try {
        const response = await fetch('http://localhost:3865/add-expense', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(expense),
        });
        if (!response.ok) {
          throw new Error('Failed saving data');
        }
        const responseData = await response.json();
        setExpenses((prevExpenses) => {
          return [responseData.expense, ...prevExpenses];
        });
      } catch (error) {
        setError({
          title: 'An error occurred!',
          message: 'Failed saving expenses data, please try again.'
        });
        setShowError(true);
      }
    };

    addExpense(expense);
  };

  const closeErrorHandler = () => {
    setShowError(false);
  };

  return (
    <div className="App">
      {showError && <Error title={error.title} message={error.message} onClose={closeErrorHandler} />}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} isLoading={isFetching} />
    </div>
  );
};

export default App;
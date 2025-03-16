import React, { useState, useEffect } from 'react';
import './App.css';
import Expenses from './components/Expenses.jsx';
import NewExpense from './components/NewExpense/NewExpense.jsx';
import ErrorModal from './UI/ErrorModal';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [addError, setAddError] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const fetchExpenses = async () => {
    try {
      const response = await fetch('http://localhost:3865/expenses');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (!data || !data.expenses || !Array.isArray(data.expenses)) {
        throw new Error('Invalid expenses data received from server.');
      }
      return data.expenses;
    } catch (error) {
      console.error('Error fetching expenses:', error);
      setFetchError({
        title: 'Fetch Error',
        message: 'Failed to fetch expenses. Please try again later.',
      });
      return null;
    }
  };

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true);
      const expensesData = await fetchExpenses();
      if (expensesData) {
        const loadedExpenses = expensesData.map((expense) => ({
          ...expense,
          date: new Date(expense.date),
        }));
        setExpenses(loadedExpenses);
      }
      setIsFetching(false);
    };
    getExpenses();
  }, []);

  const addExpenseHandler = async (expense) => {
    setIsAdding(true);
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
      setExpenses((prevExpenses) => [responseData.expense, ...prevExpenses]);
    } catch (error) {
      setAddError({
        title: 'Add Error',
        message: 'Failed saving expenses data, please try again.',
      });
    }
    setIsAdding(false);
  };

  const closeFetchErrorHandler = () => {
    setFetchError(null);
  };

  const closeAddErrorHandler = () => {
    setAddError(null);
  };

  return (
    <div className="App">
      {fetchError && (
        <ErrorModal
          title={fetchError.title}
          message={fetchError.message}
          onClose={closeFetchErrorHandler}
        />
      )}
      {addError && (
        <ErrorModal
          title={addError.title}
          message={addError.message}
          onClose={closeAddErrorHandler}
        />
      )}
      <NewExpense onAddExpense={addExpenseHandler} isLoading={isAdding} />
      <Expenses items={expenses} isLoading={isFetching} />
    </div>
  );
};

export default App;
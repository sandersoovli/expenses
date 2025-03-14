import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear - 5; i <= currentYear + 5; i++) {
        years.push(i);
    }

    const dropdownChangeHandler = (event) => {
        console.log("Selected Year: ", event.target.value);
        props.onChangeFilter(event.target.value); // Send selected year to Expenses component
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label htmlFor="year-filter">Filter by year</label>
                <select id="year-filter" value={props.selectedYear} onChange={dropdownChangeHandler}>
                    {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;

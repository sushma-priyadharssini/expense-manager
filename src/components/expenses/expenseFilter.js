import React from 'react';
import './expenseFilter.css'

const ExpenseFilter = (props) => {
    const onFilterChangeHandler = (event) => {
        props.onFilterChange(event.target.value);
    }
    return (
        <div className="expense-filter">
            <label>Filter By Year</label>
            <select value={props.selectedFilter} onChange={onFilterChangeHandler}>
                {props.data.map((year) => {
                    return (
                        <option key={year} value={year.toString()}>{year}</option>
                    );
                })}
            </select>
        </div>
    )
}

export default ExpenseFilter;
import React, { useState } from 'react';
import './expenses.css';
import ExpenseItem from './expenseItem';
import Card from '../ui/card';
import ExpenseFilter from '../expenses/expenseFilter'

const Expenses = (props) => {
    const yearsData = [...new Set(props.data.map(expense => expense.date.getFullYear()))];
    const [filteredYear, serFilteredYear] = useState(Math.max(...yearsData));

    const onFilterChangeHandler = (selectedYear) => {
        serFilteredYear(selectedYear);
    }

    return (
        <Card className="expenses">
            <ExpenseFilter data={yearsData} selectedFilter={filteredYear} onFilterChange={onFilterChangeHandler}/>
            {props.data.map(expense => {
                return (<ExpenseItem key={expense.id} data={expense}></ExpenseItem>);
            })}
        </Card>
    );
}

export default Expenses;

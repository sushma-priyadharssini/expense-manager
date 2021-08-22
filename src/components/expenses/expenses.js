import React, { useState } from 'react';
import './expenses.css';
import ExpenseItem from './expenseItem';
import Card from '../ui/card';
import ExpenseFilter from '../expenses/expenseFilter'

const Expenses = (props) => {
    const yearsData = [...new Set(props.data.map(expense => expense.date.getFullYear()))];
    const [filteredYear, setFilteredYear] = useState(Math.max(...yearsData).toString()); //TODO: need to update whenever props(data) changes

    const onFilterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = (filteredYear === 'All years') ? props.data : (props.data.filter(expense => {
        return  expense.date.getFullYear().toString() === filteredYear;
    }));

    return (
        <Card className="expenses">
            <ExpenseFilter data={[...yearsData, 'All years']} selectedFilter={filteredYear} onFilterChange={onFilterChangeHandler}/>
            {filteredExpenses.map(expense => {
                return (<ExpenseItem key={expense.id} data={expense}></ExpenseItem>);
            })}
        </Card>
    );
}

export default Expenses;

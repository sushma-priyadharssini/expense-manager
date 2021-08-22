import React, { useState } from 'react';
import './expenses.css';
import ExpenseItem from './expenseItem';
import Card from '../ui/card';
import ExpenseFilter from '../expenses/expenseFilter'
import ExpenseChart from './expenseChart';

const Expenses = (props) => {
    console.log('fn re-executes');
    const yearsData = [...new Set(props.data.map(expense => expense.date.getFullYear()))];
    const [filteredYear, setFilteredYear] = useState(Math.max(...yearsData).toString());

    const onFilterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = (filteredYear === 'All years') ? props.data : (props.data.filter(expense => {
        return  expense.date.getFullYear().toString() === filteredYear;
    }));

    return (
        <Card className="expenses">
            <ExpenseFilter data={[...yearsData, 'All years']} selectedFilter={filteredYear} onFilterChange={onFilterChangeHandler}/>
            <ExpenseChart expenses={filteredExpenses} />
            {filteredExpenses.map(expense => {
                return (<ExpenseItem key={expense.id} data={expense}></ExpenseItem>);
            })}
        </Card>
    );
}

export default Expenses;

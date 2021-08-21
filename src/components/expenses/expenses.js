// import React from 'React';
import './expenses.css';
import ExpenseItem from './expenseItem';
import Card from '../ui/card';

const Expenses = (props) => {
    return (
        <Card className="expenses">
            {props.data.map(expense => {
                return (<ExpenseItem data={expense}></ExpenseItem>);
            })}
        </Card>
    );
}

export default Expenses;

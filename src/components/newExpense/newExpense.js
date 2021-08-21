import React, { useState } from 'react';
import './newExpense.css'
import Card from '../ui/card';

const NewExpense = (props) => {
    const [ userInput, setUserInput ] = useState({
        title: '',
        amount: '',
        date: ''
    });

    const inputChangeHandler = (inputField, event) => {
        const obj = {};
        obj[inputField] = event.target.value;

        setUserInput((prevState) => {
            return {
                ...prevState,
                ...obj
            }
        });
    };

    const addNewExpenseHandler = () => {
        props.addNewExpenseHandler({
            ...userInput,
            id: Math.random(0, 100).toString()
        });
        setUserInput(() => {
            return {
                title: '',
                amount: '',
                date: ''
            }
        });
    }

    return (
        <Card className="new-expense-card">
            <form onSubmit={addNewExpenseHandler}>
                <div className="expense-controls">
                    <div className="expense-control">
                        <label>Title</label>
                        <input type="text" value={userInput.title} onChange={inputChangeHandler.bind(this, 'title')} />
                    </div>
                    <div className="expense-control">
                        <label>Amount</label>
                        <input type="text" value={userInput.amount} onChange={inputChangeHandler.bind(this, 'amount')} />
                    </div>
                    <div className="expense-control">
                        <label>Date</label>
                        <input type="date" value={userInput.date} onChange={inputChangeHandler.bind(this, 'date')} />
                    </div>
                </div>
                <button type="submit">Add Expense</button>
            </form>
        </Card>
    )
}

export default NewExpense;
import React, { useState } from 'react';
import './newExpense.css'
import Card from '../ui/card';

const NewExpense = (props) => {
    const [ userInput, setUserInput ] = useState({
        title: '',
        amount: 0.00,
        date: ''
    });
    const [showAddForm, setShowAddForm] = useState(false);

    const showAddFormHandler = () => {
        setShowAddForm(prevState => !prevState);
    }

    const inputChangeHandler = (inputField, event) => {
        const obj = {};
        const inputValue = event.target.value;
        obj[inputField] = inputValue;

        setUserInput((prevState) => {
            return {
                ...prevState,
                ...obj
            }
        });
    };

    const addNewExpenseHandler = (event) => {
        event.preventDefault();
        props.addNewExpenseHandler({
            ...userInput,
            id: Math.random(0, 100).toString(),
            date: new Date(userInput.date)
        });
        setUserInput(() => {
            return {
                title: '',
                amount: 0.00,
                date: ''
            }
        });
    }

    return (
        <Card className="new-expense-card">
            {showAddForm ? (
                <form onSubmit={addNewExpenseHandler}>
                    <div className="expense-controls">
                        <div className="expense-control">
                            <label>Title</label>
                            <input type="text" value={userInput.title} onChange={inputChangeHandler.bind(this, 'title')} />
                        </div>
                        <div className="expense-control">
                            <label>Amount</label>
                            <input type="number" value={userInput.amount} onChange={inputChangeHandler.bind(this, 'amount')} />
                        </div>
                        <div className="expense-control">
                            <label>Date</label>
                            <input type="date" value={userInput.date} onChange={inputChangeHandler.bind(this, 'date')} />
                        </div>
                    </div>
                    <button type="submit">Add Expense</button>
                </form>
                ) : (
                    <button onClick={showAddFormHandler}>Add New Expense</button>
                )
            }
        </Card>
    )
}

export default NewExpense;
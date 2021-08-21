import React, { useState } from "react";
import Expenses from "./components/expenses/expenses";
import NewExpense from "./components/newExpense/newExpense";

function App() {
  const mockData = [
      { id: '1', title: 'Mobile Recharge', date: new Date(2021, 2, 21), amount: '250'},
      { id: '2', title: 'Room Rent', date: new Date(2020, 4, 12), amount: '9000'},
      { id: '3', title: 'Bus Expense', date: new Date(2021, 7, 19), amount: '500'},
      { id: '4', title: 'New Earphones', date: new Date(2020, 6, 6), amount: '550'}
  ];

  const [expenses, setExpenses] = useState(mockData);

  const addNewExpenseHandler = (newExpense) => {
    console.log(newExpense);
    setExpenses((prevState) => {
      return [newExpense, ...prevState];
    })
  }
  
  return (
    <div id="app">
      <NewExpense addNewExpenseHandler={addNewExpenseHandler}/>
      <Expenses data={expenses}/>
    </div>
  );
}

export default App;

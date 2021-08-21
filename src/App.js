import Expenses from "./components/expenses/expenses";

function App() {
  const data = [
      { id: '1', title: 'Mobile Recharge', date: new Date(2021, 2, 21), amount: '₹250'},
      { id: '2', title: 'Room Rent', date: new Date(2020, 4, 12), amount: '₹9000'},
      { id: '3', title: 'Bus Expense', date: new Date(2021, 2, 19), amount: '₹500'},
      { id: '4', title: 'New Earphones', date: new Date(2020, 2, 6), amount: '₹550'}
  ];
  return (
    <div id="app">
      <Expenses data={data}/>
    </div>
  );
}

export default App;

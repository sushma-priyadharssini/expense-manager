import Chart from '../chart/chart';

const ExpenseChart = (props) => {
    const datePoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }
    ];

    // props.expenses.forEach(expense => {
    //     const expenseMonth = expense.date.getMonth();
    //     datePoints[expenseMonth].value += expense.amount;
    // });

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        datePoints[expenseMonth].value += expense.amount;
    }

    return <Chart dataPoints={datePoints} />
}

export default ExpenseChart;
import './expenseItem.css';
import DateCard from '../ui/dateCard';

export const ExpenseItem = (props) => {
    const {data} = props;
    return (
        <div className="expense-item">
            <DateCard date={data.date}/>
            <div className="expense-title">{data.title}</div>
            <div className="expense-amount">{data.amount}</div>
        </div>
    )
}

export default ExpenseItem;

import './dateCard.css'
import Card from './card'

const dateCard = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const date = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();
    return (
        <Card className="expense-date">
            <div>{month}</div>
            <div>{year}</div>
            <div>{date}</div>
        </Card>
    )
}

export default dateCard;
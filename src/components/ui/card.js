import './card.css';

const card = (props) => {
    const className = 'card ' + props.className;
    return (
        <div className={className}>{props.children}</div>
    )
}

export default card;
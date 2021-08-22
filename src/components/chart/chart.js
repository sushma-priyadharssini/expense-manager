import './chart.css';
import ChartBar from './chartBar';

const Chart = (props) => {
    const maxValue = Math.max(...(props.dataPoints.map(dataPoint => dataPoint.value)));
    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => (
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={maxValue}
                    label={dataPoint.label}
                />
            ))}
        </div>
    )
}

export default Chart;
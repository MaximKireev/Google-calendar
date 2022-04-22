import './Cell.css'

export const HourCell = (props) => {
    let { value } = props;
  
    return (
      <div
        className="hour-cell-wrapper"
      >
        <span className='time'>{value}</span>
        <div className="quarter-of-an-hour"></div>
        <div className="quarter-of-an-hour"></div>
        <div className="quarter-of-an-hour"></div>
        <div className="quarter-of-an-hour"></div>
      </div>
    );
  };
  
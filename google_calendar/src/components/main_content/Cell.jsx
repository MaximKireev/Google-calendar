import "./Cell.css";
import { connect } from 'react-redux';
import {openEventCreatorWindow} from '../../redux/actions'
import React from 'react'
import { Badge } from 'antd';


 const Cell = (props) => {
  let {showEventCreator, initialEvents} = props;

  let { id, day, nextOrPrev, cell } = props.fullItemData;

  let renderEvents = initialEvents.filter(item => item.data === id);


  const handleClick = (event) => {
  if(!event.target.getAttribute('data-cell')) return;
  else 
  showEventCreator()
}


  return (
    <div
    onClick={handleClick} 
    id={id} 
    className={nextOrPrev? 'day-cell prevOrNextStyle': 'day-cell'}
    data-cell = {cell} 
   >
       <Badge count={day} style={{ color: 'black', backgroundColor: 'white',  fontSize: '16px', }}></Badge>
      {
        renderEvents?.map(item => <div className="event">{item.description}</div>)
      }
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    showEventCreator: () => dispatch(openEventCreatorWindow())  
  }
}
const mapStateToProps = (state) => {
  return {
    initialEvents: state.initialEvents,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)

import "./Cell.css";
import { connect } from 'react-redux';
import React from 'react'
import { Badge } from 'antd';
import {useNavigate} from 'react-router-dom';
import {openEventCreatorWindow} from '../../redux/actions';




 const Cell = (props) => {

  let { initialEvents, openEventCreatorWindow} = props;
  let { id, day, nextOrPrev, cell } = props.fullItemData;

  let renderEvents = initialEvents.filter(item => item.data === id);
  const navigate = useNavigate();

  const createAnEvent = (event) => {
  if(!event.target.getAttribute('data-cell')) return;
  else 
  openEventCreatorWindow(id)
}

  
  const switchToDayComponent = React.useCallback(() => navigate(`/day/${id}`, {replace: true}));



  return (
    <div
    onClick={createAnEvent} 
    id={id} 
    className={nextOrPrev? 'day-cell prevOrNextStyle': 'day-cell'}
    data-cell = {cell} 
   >
       <Badge
       onClick = {switchToDayComponent}
       count={day} style={{ 
       color: 'black', 
       backgroundColor: 'white',  
       fontSize: '16px',
       cursor: 'pointer' }}>
       </Badge>
      {
        renderEvents?.map(item => <div className="event">{item.description}</div>)
      }


    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    initialEvents: state.initialEvents,

  }
}

const mapDispatchToProps = dispatch => {
  return {
    openEventCreatorWindow: (value) => {
      let payload = value
      return dispatch(openEventCreatorWindow(payload))
    } ,
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Cell)

import "./Cell.css";
import { connect } from 'react-redux';
import React from 'react'
import { Badge } from 'antd';
import {useNavigate} from 'react-router-dom';



 const Cell = (props) => {
  let { initialEvents} = props;

  let { id, day, nextOrPrev, cell } = props.fullItemData;

  let renderEvents = initialEvents.filter(item => item.data === id);
  const navigate = useNavigate();

  const screateAnEvent = (event) => {
  if(!event.target.getAttribute('data-cell')) return;
  else 
  navigate(`/month/createAnEvent/${id}`, {replace: true});
}

  
  const handleOnClick = React.useCallback(() => navigate(`/day/${id}`, {replace: true}));



  return (
    <div
    onClick={screateAnEvent} 
    id={id} 
    className={nextOrPrev? 'day-cell prevOrNextStyle': 'day-cell'}
    data-cell = {cell} 
   >
       <Badge
       onClick = {handleOnClick}
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

export default connect(mapStateToProps, null)(Cell)

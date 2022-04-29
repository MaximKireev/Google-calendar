import  Cell  from './Cell';
import './Calendar.css'
import React from 'react';
import { connect } from 'react-redux';
import EventCreatorWindow from '../eventCreator/EventCreatorWindow'


const Calendar = ({currentCalendar, isEventCreatorWindowVisible}) => {
  return (
    <div className="calendar-wrapper">

      {currentCalendar.map((item, idx) => (
        <div key = {idx} className="weak-wrapper">
          {item.map((innerItem) => (
            <Cell 
            key = {innerItem.id} 
            fullItemData = {innerItem} />
          ))}
        </div>
      ))}
      {isEventCreatorWindowVisible? <EventCreatorWindow /> : null}

    </div>
  );
};

const mapStateToProps = (state) => ({
  currentCalendar: selectCurrentCalendar(state),
  isEventCreatorWindowVisible: selectIsEventCreatorWindowVisible(state)
})

export default connect(mapStateToProps, null)(Calendar)

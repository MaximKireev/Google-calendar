import { Cell } from './Cell';
import './Calendar.css'
import { EventCreator } from '../eventCreator/eventCreator';
import React from 'react';
import { connect } from 'react-redux';

const Calendar = ({currentCalendar}) => {

let calendar = currentCalendar()
  return (
    <div className="calendar-wrapper">

      {calendar.map((item) => (
        <div className="weak-wrapper">
          {item.map((innerItem) => (
            <Cell id={innerItem.id} valueWithData={innerItem.day} />
          ))}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentCalendar: state.currentCalendar
  }
}

export default connect(mapStateToProps, null)(Calendar)

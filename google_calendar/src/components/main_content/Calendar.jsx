import  Cell  from './Cell';
import './Calendar.css'
import React from 'react';
import { connect } from 'react-redux';

const Calendar = ({currentCalendar, initialEvents}) => {




  

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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentCalendar: state.currentCalendar,
  }
}

export default connect(mapStateToProps, null)(Calendar)

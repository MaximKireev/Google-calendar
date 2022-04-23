import 'antd/dist/antd.css';
import './eventCreator.css'
import { TimePicker } from 'antd';
import Draggable from 'react-draggable'; 
import { connect } from 'react-redux';
import React from 'react'
import {closeEventCreatorWindow} from '../../redux/actions'
import { useNavigate } from 'react-router-dom';




const EventCreatorWindow = ({initialEvents, closeEventCreatorWindow, selectedDate}) => {

  let navigate = useNavigate();
    
    let [inputValue, setInputValue] = React.useState();
    let [timeRange, setTimeRange] = React.useState();
    let [TextAreaValue, setTextAreaValue] = React.useState();

    const inputValueHandler = (e) => {
        e.preventDefault()
        setInputValue(e.target.value)
    }

    const TextAreaValueHandler = (e) => {
        e.preventDefault()
        setTextAreaValue(e.target.value)
    }
    const timeRangeHandler = (val) => {
        setTimeRange(val)
    }

    const hadleFormData = () => {
        let event = {
            data: selectedDate, 
            title: inputValue, 
            description: TextAreaValue, 
            timeFrom: '09:00', 
            timeTo: '12:00'}

            console.log(inputValue, TextAreaValue, timeRange[0]._d,)
            
            initialEvents.push(event)
            localStorage.setItem('events', JSON.stringify(initialEvents));
            navigate('/month', {replace: true});
            closeEventCreatorWindow()
    }

  
    

return(
    <Draggable defaultPosition={{x: -250, y: -250}}>
    <form type='submit'
    className="event-wrapper">
            <input
            onChange = {(e) => inputValueHandler(e)}
            type="text" placeholder='Title here' className='task-input'/>
            <TimePicker.RangePicker
            onChange = {(a) => timeRangeHandler(a)}
            format = {'HH:mm'}
            />
            <textarea
            onChange={(e) => TextAreaValueHandler(e)}
            className='task-description' name="" id="" cols="30" rows="10"></textarea>
            <button
            onClick={(e) => hadleFormData(e)}
            type= 'button' className='button-save'>Save task</button>
            <button
            onClick={closeEventCreatorWindow}
            type='button' className="close"></button>
    </form>
    </Draggable>
)
}
  const mapStateToProps = state => {
      return {
        initialEvents: state.initialEvents,
        selectedDate: state.selectedDate
      }
  }

  const mapDispatchToProps = dispatch => {
    return {
      closeEventCreatorWindow: () => dispatch(closeEventCreatorWindow()),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(EventCreatorWindow);
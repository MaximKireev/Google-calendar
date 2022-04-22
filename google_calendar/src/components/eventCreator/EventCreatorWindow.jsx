import 'antd/dist/antd.css';
import './eventCreator.css'
import { TimePicker } from 'antd';
import Draggable from 'react-draggable'; 
import { connect } from 'react-redux';
import React from 'react'
import { useParams, useNavigate } from "react-router-dom";




const EventCreatorWindow = ({initialEvents}) => {

    let { id } = useParams();
    let navigate = useNavigate()
    
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
            data: id, 
            title: inputValue, 
            description: TextAreaValue, 
            timeFrom: '09:00', 
            timeTo: '12:00'}
            
            
            initialEvents.push(event);
            localStorage.setItem('events', JSON.stringify(initialEvents))   
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
            />
            <textarea
            onChange={(e) => TextAreaValueHandler(e)}
            className='task-description' name="" id="" cols="30" rows="10"></textarea>
            <button
            onClick={(e) => hadleFormData(e)}
            type= 'button' className='button-save'>Save task</button>
            <button
            onClick={() => navigate('/month', {replace: true})}
            type='button' className="close"></button>
    </form>
    </Draggable>
)
}
  const mapStateToProps = state => {
      return {
        initialEvents: state.initialEvents
      }
  }

export default connect(mapStateToProps, null)(EventCreatorWindow);
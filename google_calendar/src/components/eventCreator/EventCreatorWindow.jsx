import 'antd/dist/antd.css';
import './eventCreator.css'
import {  DatePicker } from 'antd';
import Draggable from 'react-draggable'; 
import { connect } from 'react-redux';
import {closeEventCreatorWindow} from '../../redux/actions'
import React from 'react'



const EventCreatorWindow = ({hideEventCreator}) => {
    const { RangePicker } = DatePicker;
    
    let [inputValue, setInputValue] = React.useState();
    let [TextAreaValue, setTextAreaValue] = React.useState();
    const inputValueHandler = (e) => {
        e.preventDefault()
        setInputValue(e.target.value)
    }
    const TextAreaValueHandler = (e) => {
        e.preventDefault()
        setTextAreaValue(e.target.value)
    }
    const hadleFormData = (e) => {
          
        let data = JSON.parse(localStorage.getItem('events'));
//        data.push({inputValue: inputValue, TextAreaValue: TextAreaValue})
if(!data){
    localStorage.setItem('events',
    JSON.stringify(
        {inputValue: inputValue, TextAreaValue: TextAreaValue})
        )

}
else {
   
    console.log(data)
    //tempArr.push(JSON.stringify({inputValue: inputValue, TextAreaValue: TextAreaValue}))
    //localStorage.setItem('events', tempArr)

}       
        
    }
    

return(
    <Draggable 
    defaultPosition={{x: -250, y: -250}}
    >
    <form type='submit'
    
    className="event-wrapper">
            <input
            onChange = {(e) => inputValueHandler(e)}
            type="text" placeholder='Title here' className='task-input'/>
            <RangePicker 
            renderExtraFooter={() => 'extra footer'} 
            showTime />
            <textarea
            onChange={(e) => TextAreaValueHandler(e)}
            className='task-description' name="" id="" cols="30" rows="10"></textarea>
            <button
            onClick={(e) => hadleFormData(e)}
            type= 'button' className='button-save'>Save task</button>
            <button
            onClick={hideEventCreator}
            type='button' className="close"></button>
    </form>
    </Draggable>
)
}



const mapDispatchToProps = (dispatch) => {
    return {
      hideEventCreator: () => dispatch(closeEventCreatorWindow()) 
    }
  }

export default connect(null, mapDispatchToProps)(EventCreatorWindow);
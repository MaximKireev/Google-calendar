import 'antd/dist/antd.css';
import './eventCreator.css'
import {  DatePicker } from 'antd';
import Draggable from 'react-draggable'; // The default


const EventCreator = () => {
    const { RangePicker } = DatePicker;


return(
    <Draggable 
    defaultPosition={{x: -250, y: -250}}
    >
    <form type='submit'
    
    className="event-wrapper">
            <input type="text" placeholder='Title here' className='task-input'/>
            <RangePicker renderExtraFooter={() => 'extra footer'} showTime />
            <textarea className='task-description' name="" id="" cols="30" rows="10"></textarea>
            <button type='button' className='button-save'>Save task</button>
            <button type='button' className="close"></button>
    </form>
    </Draggable>
)
}

export {EventCreator}
import React from 'react'
import { TimePicker } from 'antd';
import { useNavigate } from 'react-router-dom';
import Draggable from 'react-draggable';

import 'antd/dist/antd.css';
import './eventCreator.css';

const EventCreatorWindow = ({initialEvents, selectedDate, onCloseEventCreatorWindow}) => {
  const navigate = useNavigate();
  const [title, setTitle] = React.useState();
  const [timeRange, setTimeRange] = React.useState();
  const [description, setDescription] = React.useState();

  const onChangeInputValue = (e) => {
      e.preventDefault()
      setTitle(e.target.value)
  }

  const onChangeTextAreaValue = (e) => {
      e.preventDefault()
      setDescription(e.target.value)
  }

  const onChangeTimeRange = (val) => {
      setTimeRange(val)
  }

  const handleFormData = () => {
      const event = {
        data: selectedDate,
        title: title,
        description: description,
        timeFrom: '09:00',
        timeTo: '12:00'
      }

      initialEvents.push(event)
      localStorage.setItem('events', JSON.stringify(initialEvents));
      navigate('/month', {replace: true});
      closeEventCreatorWindow()
  }

  return (
    <Draggable defaultPosition={{x: -250, y: -250}}>
      <form
        type='submit'
        className="event-wrapper"
      >
        <input
          type="text" placeholder='Title here' className='task-input'
          onChange = {(e) => onChangeInputValue(e)}
        />
        <TimePicker.RangePicker
          format = {'HH:mm'}
          onChange = {(a) => onChangeTimeRange(a)}
        />
        <textarea
          className='task-description' name="" id="" cols="30" rows="10"
          onChange={(e) => onChangeTextAreaValue(e)}
        />
        <button
          type= 'button' className='button-save'
          onClick={(e) => handleFormData(e)}
        >
          Save task
        </button>
        <button
          type='button' className="close"
          onClick={onCloseEventCreatorWindow}
        />
      </form>
    </Draggable>
  )
}

export default EventCreatorWindow;
import * as constants from './constants'
import {selectInitialEvents, selectSelectedDate} from "./selectors";
import {useNavigate} from "react-router-dom";

const createEvent = value => {
    const payload = {
      id: value.id, 
      title: value.title, 
      description: value.description, 
      timeFrom: '09:00', 
      timeTo: '12:00' };
    return {
      type: constants.CREATE_NEW_CALENDAR_EVENT,
      payload
    };
  };
  
  const deleteEvent = (id) => ({
    type: constants.DELETE_CALENDAR_EVENT,
    payload: id
  });
  
  const setToday = () => {
    return {
      type: constants.SET_DATE_TO_TODAY,
    };
  };
  
  const monthReverse = () => {
    return {
      type: constants.SWITCH_TO_A_MONTH_AGO,
      payload: -1
    };
  };
  const monthForward = () => {
    return {
      type: constants.SWITCH_TO_ONE_MONTH_FORWARD,
      payload: 1
    };
  };
  const toggleMenu = () => {
    return {
      type: constants.SHOW_HIDE_SIDEBAR
    };
  };

  const pageOnLoad = () => {
    return {
      type: constants.PAGE_WAS_LOADED
    };
  }
  const openEventCreatorWindow = (val) => {
    return {
      type: constants.OPEN_EVENT_CREATOR_WINDOW,
      payload: val
    };
  }
  const closeEventCreatorWindow = ({title, description}) => (dispatch, getState) => {
    const navigate = useNavigate(); // TODO: I'm not sure about that, maybe you should make redirect other way
    const selectedDate = selectSelectedDate(getState());
    const initialEvents = selectInitialEvents(getState());

    const event = {
      title,
      description,
      data: selectedDate,
      timeFrom: '09:00', // ???
      timeTo: '12:00' // ???
    }

    initialEvents.push(event)
    // TODO: all local storage staff shouldn't be here. It should be in some utils file
    // your should have:
    // 1) function `setEventItem`, `removeEventItem` or `clear`
    // 2) `events` - it's should be a localStorage constant
    localStorage.setItem('events', JSON.stringify(initialEvents));
    navigate('/month', {replace: true});

    return { type: constants.CLOSE_EVENT_CREATOR_WINDOW };
  }



  
  export {
    createEvent,
    deleteEvent,
    setToday,
    monthReverse,
    monthForward,
    toggleMenu,
    pageOnLoad,
    openEventCreatorWindow,
    closeEventCreatorWindow,
  };
import * as constants from './constants'

const createEvent = value => {
    let payload = { 
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

  
  export {
    createEvent,
    deleteEvent,
    setToday,
    monthReverse,
    monthForward,
    toggleMenu,
    pageOnLoad,
  };
import * as constants from './constants'

const createEvent = value => {
 
    let payload = { id: Date.now(), title: value, important: false, done: false };
    return {
      type: constants.CREATE_NEW_CALENDAR_EVENT,
      payload
    };
  };
  
  const deleteEvent = (id) => ({
    type: constants.DELETE_CALENDAR_EVENT,
    payload: id
  });
  
  const setToday = (id) => {
    return {
      type: constants.SET_DATE_TO_TODAY,
    };
  };
  
  const monthReverse = (id) => {
    return {
      type: constants.SWITCH_TO_A_MONTH_AGO,
      payload: id
    };
  };
  const monthForward = () => {
    return {
      type: constants.SWITCH_TO_ONE_MONTH_FORWARD
    };
  };
  const toggleMenu = () => {
    return {
      type: constants.SHOW_HIDE_SIDEBAR
    };
  };

  
  export {
    createEvent,
    deleteEvent,
    setToday,
    monthReverse,
    monthForward,
    toggleMenu
  };
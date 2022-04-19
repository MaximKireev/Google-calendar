const createEvent = value => {
 
    let payload = { id: Date.now(), title: value, important: false, done: false };
    return {
      type: "CREATE_EVENT",
      payload
    };
  };
  
  const deleteEvent = (id) => ({
    type: "DELETE_EVENT",
    payload: id
  });
  
  const setToday = (id) => {
    return {
      type: "SET_TODAY",
    };
  };
  
  const monthReverse = (id) => {
    return {
      type: "MONTH_REVERS",
      payload: id
    };
  };
  const monthForward = () => {
    return {
      type: "MONTH_FWD"
    };
  };
  const toggleMenu = () => {
    return {
      type: "SHOW_HIDE_MENU"
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
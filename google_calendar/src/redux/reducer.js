import {createCalendarMatrix, changeMonth} from '../utils/createCalendar'
import * as constants from './constants';
let currentCalendar = createCalendarMatrix();
let eventsInLocalStorage = JSON.parse(localStorage.getItem('events')) || [];


const initialState = {
    currentDate: new Date(),
    isSideBarVisible: true,
    isEventCreatorWindowVisible: false,
    initialEvents: eventsInLocalStorage,
    currentYear: function(){return this.currentDate.getFullYear()} ,
    currentMonth: function(){return this.currentDate.getMonth()},
    currentCalendar,
    selectedDate: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.PAGE_WAS_LOADED:
            return state.initialEvents;
            
        case constants.SHOW_HIDE_SIDEBAR:
            return {
                ...state,
                isSideBarVisible: !state.isSideBarVisible
              };
        case constants.OPEN_EVENT_CREATOR_WINDOW:
            return {
                ...state,
                isEventCreatorWindowVisible: true,
                selectedDate: action.payload
              };
        case constants.CLOSE_EVENT_CREATOR_WINDOW:
            return {
                ...state,
                isEventCreatorWindowVisible: false
                  };

        case constants.CREATE_NEW_CALENDAR_EVENT:
         return   console.log('event created');  

        case constants.DELETE_CALENDAR_EVENT:
            return  console.log('DELETE_EVENT'); 

        case constants.SET_DATE_TO_TODAY:
            return  console.log('SET_DATE_TO_TODAY');

        case constants.SWITCH_TO_A_MONTH_AGO:
            
            return {
                ...state,
                currentCalendar: changeMonth(action.payload)
            };

        case constants.SWITCH_TO_ONE_MONTH_FORWARD:
            return {
                ...state,
                currentCalendar: changeMonth(action.payload)
            };
                  
        
        default:
        return state

    }
}

export default reducer
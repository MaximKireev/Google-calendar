import {createCalendarMatrix, changeMonth} from '../utils/createCalendar'
import * as constants from './constants';
let currentCalendar = createCalendarMatrix()

const initialState = {
    currentDate: new Date(),
    isSideBarVisible: true,

    currentYear: function(){return this.currentDate.getFullYear()} ,
    currentMonth: function(){this.currentDate.getMonth()},
    currentCalendar,
    
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
       
        case constants.CREATE_NEW_CALENDAR_EVENT:
         return   console.log('event created');  

        case constants.DELETE_CALENDAR_EVENT:
            return  console.log('DELETE_EVENT'); 

        case constants.SET_DATE_TO_TODAY:
            return  console.log('today setted');

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

        case constants.SHOW_HIDE_SIDEBAR:
            return {
                ...state,
                isSideBarVisible: !state.isSideBarVisible
              }
                  
        
        default:
        return state

    }
}

export default reducer
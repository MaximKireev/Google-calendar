import {createCalendarMatrix} from '../utils/createCalendar'
import * as constants from './constants'

const initialState = {
    currentDate: new Date(),
    isSideBarVisible: true,

    currentYear: function(){return this.currentDate.getFullYear()} ,
    currentMonth: function(){this.currentDate.getMonth()},
    currentCalendar: () => createCalendarMatrix(),
    
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
            return   console.log('MONTH_REVERS');

        case constants.SWITCH_TO_ONE_MONTH_FORWARD:
            return   console.log('MONTH_FWD');
            
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
const initialState = {
    currentDate: new Date(),
    isSideBarVisible: true,
    weekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    DaysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    currentYear: function(){return this.currentDate.getFullYear()} ,
    currentMonth: function(){this.currentDate.getMonth()},
    events: []
    
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
       
        case 'CREATE_EVENT':
         return   console.log('event created');  
        case 'DELETE_EVENT':
            return  console.log('DELETE_EVENT'); 
        case 'SET_TODAY':
            return  console.log('today setted');
        case 'MONTH_REVERS':
            return   console.log('MONTH_REVERS');
        case 'MONTH_FWD':
            return   console.log('MONTH_FWD');
        case 'SHOW_HIDE_MENU':
            return {
                ...state,
                isSideBarVisible: !state.isSideBarVisible
              }
                  
        
        default:
        return state

    }
}

export default reducer
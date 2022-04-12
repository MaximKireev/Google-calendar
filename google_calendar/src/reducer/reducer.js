const initialState = {
    currentDate: new Date(),
    isSideBarVisible: true,
    weekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    DaysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    currentYear: this.currentYear.getFullYear(),
    currentMonth: this.currentYear.getMonth(),
    events: []
    
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Calendar_LOADED':
          ;
        case 'CREATE_EVENT':
            
        ;  
        case 'DELETE_EVENT':
            
            ; 
           
        default:
                return state

    }
}

export default reducer
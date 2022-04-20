import {Routes, Route} from 'react-router-dom'
import Header from './components/header/Header.jsx';
import {Sidebar} from './components/left_pannel/Sidebar.jsx'
import Calendar from './components/main_content/Calendar.jsx'
import {DayView} from './components/main_content/DayView.jsx'
import { connect } from 'react-redux';
import './index.css'
import EventCreatorWindow from './components/eventCreator/EventCreatorWindow.jsx'

const App = ({isSideBarVisible, isEventCreatorWindowVisible}) => {
 return(
   <div className = 'app'>
   <Header />

   
    <div className='main-wrapper'>
    {isSideBarVisible? <Sidebar /> : null} 

    <Routes>
    <Route path = '/' element = {<Calendar />}/>
    <Route path = '/month' element = {<Calendar />}/>
    <Route path = '/day' element = {<DayView />}/>
    </Routes>
   </div>

  {isEventCreatorWindowVisible? <EventCreatorWindow /> : null} 
   </div>
 ) 
}

const mapStateToProps = (state) => {
  return {
    isSideBarVisible: state.isSideBarVisible,
    isEventCreatorWindowVisible: state.isEventCreatorWindowVisible,

  }
}


export default connect(mapStateToProps, null)(App);

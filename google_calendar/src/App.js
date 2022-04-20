import {Routes, Route} from 'react-router-dom'
import Header from './components/header/Header.jsx';
import {Sidebar} from './components/left_pannel/Sidebar.jsx'
import Calendar from './components/main_content/Calendar.jsx'
import {DayView} from './components/main_content/DayView.jsx'
import { connect } from 'react-redux';
import './index.css'

const App = ({isVisible}) => {
 return(
   <div className = 'app'>
   <Header />

   
    <div className='main-wrapper'>
    <Sidebar />
    <Routes>
    <Route path = '/' element = {<Calendar />}/>
    <Route path = '/month' element = {<Calendar />}/>
    <Route path = '/day' element = {<DayView />}/>
    </Routes>
   </div>
   </div>
 ) 
}

const mapStateToProps = (state) => {
  return {
    isVisible: state.isSideBarVisible,
  }
}


export default connect(mapStateToProps, null)(App);

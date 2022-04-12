import Header from './header/Header.jsx';
import {Sidebar} from './left_pannel/Sidebar.jsx'
import {CalendarContent} from './main_content/CalendarContent.jsx'
import { connect } from 'react-redux';
import './index.css'

const App = ({isSideBarVisible}) => {
 return(
   <div className = 'app'>
   <Header />
   <div className='main-wrapper'>          
 {isSideBarVisible? <Sidebar /> : null} 
   <CalendarContent />
   </div>
   </div>
 ) 
}

const mapStateToProps = (state) => {
  return {
    isSideBarVisible: state.isSideBarVisible
  }
}

export default connect(mapStateToProps, null)(App);

import Header from './components/header/Header.jsx';
import {Sidebar} from './components/left_pannel/Sidebar.jsx'
import Calendar from './components/main_content/Calendar.jsx'
import { connect } from 'react-redux';
import './index.css'

const App = ({isSideBarVisible}) => {
 return(
   <div className = 'app'>
   <Header />
   <div className='main-wrapper'>          
    {isSideBarVisible? <Sidebar /> : null} 
    <Calendar />
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

import {Header} from './header/Header.jsx';
import {Sidebar} from './left_pannel/Sidebar.jsx'
import {CalendarContent} from './main_content/CalendarContent.jsx'
//import useToggle from './hooks/useToggle'

const App = () => {
 return(
   <div className = 'main'>
   <Header />
  <Sidebar />
   <CalendarContent />
   </div>
 ) 
}

export default App;

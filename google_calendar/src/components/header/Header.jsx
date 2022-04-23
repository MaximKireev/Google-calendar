import {toggleMenu} from "../../redux/actions";
import {connect} from 'react-redux'
import {ChangeCalendarView} from './ChangeCalendarView'

import './Header.css'
import {MenuOutlined, CalendarOutlined} from '@ant-design/icons';
import PeriodControl from './PeriodControl'
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";


const Header = ({toggleMenu}) => {
return (
    
    <div className="header-wrapper">
        
        <div className="logo-menu-wrapper">
        <button
        onClick={() => toggleMenu()}
        className='burger-menu'><MenuOutlined /></button>
        <CalendarOutlined style={{ fontSize: '36px', color: '#08c' }}/>
        <span className="logo-text1">Google</span><span className="logo-text2">Calendar</span>
        </div>
        <ErrorBoundary>
            <PeriodControl />
        </ErrorBoundary>


    < ChangeCalendarView/>

    </div>
    
)
}


const mapDispatchToProps = {
    toggleMenu
};

export default connect(null, mapDispatchToProps)(Header)
import './Header.css'
import {MenuOutlined, CalendarOutlined} from '@ant-design/icons';
import PeriodControl from './PeriodControl'
export const Header = () => {
return (
    <div className="header-wrapper">
        <div className="logo-menu-wrapper">
        <button className='burger-menu'><MenuOutlined /></button>
        <CalendarOutlined style={{ fontSize: '36px', color: '#08c' }}/>
        <span className="logo-text1">Google</span><span className="logo-text2">Calendar</span>
        </div>
        <PeriodControl />
    </div>
)
}
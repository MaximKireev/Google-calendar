import React from 'react'
import { Button  } from 'antd';
import './Header.css'
import {LeftOutlined, RightOutlined} from '@ant-design/icons';
import {monthReverse, monthForward} from '../../redux/actions'
import { connect } from 'react-redux';


const PeriodControl = ({year, monthReverse, monthForward}) => {
    
return (
    <div className="period-wrapper">
        <Button size={'large'}>Today</Button>
        <LeftOutlined onClick={monthReverse}  style={{fontSize: '20px'}}/>
        <RightOutlined onClick={monthForward} style={{fontSize: '20px'}}/>
        
        <span className="current-period">
            {`${new Date().toLocaleString('en-EN', { month: 'long' })} ${year}`}</span>
    </div>
)
}

const mapStateToProps = (state) => {
return {
    month: state.currentMonth(),
    year: state.currentYear()
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        monthReverse: () => dispatch(monthReverse()),
        monthForward: () => dispatch(monthForward())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeriodControl)
import React from 'react'
import { Button  } from 'antd';
import './Header.css'
import {LeftOutlined, RightOutlined} from '@ant-design/icons';
import { connect } from 'react-redux';


const PeriodControl = ({month, year}) => {
return (
    <div className="period-wrapper">
        <Button size={'large'}>Today</Button>
        <LeftOutlined style={{fontSize: '20px'}}/>
        <RightOutlined style={{fontSize: '20px'}}/>
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

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PeriodControl)
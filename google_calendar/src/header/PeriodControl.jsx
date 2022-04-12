import React from 'react'
import { Button  } from 'antd';
import './Header.css'
import {LeftOutlined, RightOutlined} from '@ant-design/icons';


const PeriodControl = () => {
return (
    <div className="period-wrapper">
        <Button size={'large'}>Today</Button>
        <LeftOutlined style={{fontSize: '20px'}}/>
        <RightOutlined style={{fontSize: '20px'}}/>
        <span className="current-period">01.01.1970</span>
    </div>
)
}

export default PeriodControl
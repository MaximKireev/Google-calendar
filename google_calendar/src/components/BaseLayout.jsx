import React from 'react';
import Header from '../components/header/Header.jsx';
import {Sidebar} from "./left_pannel/Sidebar";
import './index.css'

const BaseLayout = ({children, isSideBarVisible}) => {
  return(
    <div className = 'app'>
      <Header />
      <div className='main-wrapper'>
        {isSideBarVisible? <Sidebar /> : null}
        {children}
      </div>
    </div>
  )
}

export default BaseLayout;

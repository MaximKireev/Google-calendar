import React from 'react';
import {Routes, Route} from 'react-router-dom'

import {DayView} from '../components/main_content/DayView.jsx'
import MonthPage from "../pages/MonthPage";
import EventCreatorWindow from '../components/eventCreator/EventCreatorWindow.jsx'
import './index.css'

// TODO: using EventCreatorWindow popup in the router is a very bad idea, it has no right to exist

const Router = () => {
  return (
    <Routes>
      <Route path = '/' element = {<MonthPage />}/>
      <Route path = 'month' element = {<MonthPage />} />
      <Route path = 'month/createAnEvent/:id' element = {<EventCreatorWindow />} />
      <Route path = '/day' element = {<DayView />}/>
      <Route path = '/day/:id' element = {<DayView />}/>
    </Routes>
  )
}

export default Router;

import React from 'react';
import { connect } from 'react-redux';
import './index.css'
import BaseLayout from "../components/BaseLayout";
import Router from "./Router";

const App = ({isSideBarVisible}) => {
 return (
   <BaseLayout isSideBarVisible={isSideBarVisible}>
      <Router />
   </BaseLayout>
 );
}

const mapStateToProps = (state) => {
  return {
    isSideBarVisible: state.isSideBarVisible,
  }
}


export default connect(mapStateToProps, null)(App);

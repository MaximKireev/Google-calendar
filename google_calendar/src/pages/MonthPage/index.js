import React from 'react';
import { connect } from 'react-redux';
import MonthPage from './MonthPage';
import {
  selectCurrentCalendar,
  selectInitialEvents,
  selectIsEventCreatorWindowVisible,
  selectSelectedDate
} from "../../redux/selectors";
import {closeEventCreatorWindow} from "../../redux/actions";

const mapStateToProps = (state, props) => ({ // TODO: just remember you can use props here and calculate something if you need
  selectedDate: selectSelectedDate(state),
  initialEvents: selectInitialEvents(state),
  currentCalendar: selectCurrentCalendar(state),
  isEventCreatorWindowVisible: selectIsEventCreatorWindowVisible(state)
});

const mapDispatchToProps = {
  onCloseEventCreatorWindow: closeEventCreatorWindow,
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthPage);
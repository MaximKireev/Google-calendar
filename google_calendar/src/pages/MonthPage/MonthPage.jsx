import React from 'react';
import EventCreatorWindow from "../../components/eventCreator/EventCreatorWindow";

const MonthPage = ({
  selectedDate,
  initialEvents,
  currentCalendar,
  isEventCreatorWindowVisible,
  onCloseEventCreatorWindow
}) => {
  return (
    <>
      <Calendar
        isEventCreatorWindowVisible={isEventCreatorWindowVisible}
        currentCalendar={currentCalendar}
      />
      <EventCreatorWindow
        selectedDate={selectedDate}
        initialEvents={initialEvents}
        onCloseEventCreatorWindow={onCloseEventCreatorWindow}
      />
    </>
  );
};

export default MonthPage;

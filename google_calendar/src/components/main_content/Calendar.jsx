import {changeMonth, createCalendarMatrix} from '../../utils/createCalendar'
import { Cell } from './Cell';
import { EventCreator } from '../eventCreator/eventCreator';
import React from 'react'

export const Calendar = () => {
  let initialCalendar = createCalendarMatrix();

  let [calendar, setCalendar] = React.useState(initialCalendar);

  const prevBtnRef = React.useRef(null);
  const nextBtnRef = React.useRef(null);

  React.useEffect(() => {
    prevBtnRef.current.addEventListener("click", () => {
      setCalendar(changeMonth(-1));
    });
    nextBtnRef.current.addEventListener("click", () => {
      setCalendar(changeMonth(1));
    });
  }, []);

  return (
    <div className="wrapper">
      <button ref={prevBtnRef} className="prevMonth">
        Prev
      </button>

      <button ref={nextBtnRef} className="nextMonth">
        Next
      </button>
      {calendar.map((item) => (
        <div
          style={{
            display: "flex",
            width: "714px"
          }}
          className="dayWrapper"
        >
          {item.map((innerItem) => (
            <Cell id={innerItem.id} valueWithData={innerItem.day} />
          ))}
        </div>
      ))}
    </div>
  );
};


import { days, daysInMonth } from "./fixtures";

export let date = new Date();
export let year = date.getFullYear();
export let month = date.getMonth();

const createCalendarMatrix = () => {
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const numOfDays = daysInMonth[month];

  let counter = 1;
  let counterAfter = 1;
  const matrix = [];
  matrix[0] = days;

  for (let row = 1; row < 7; row++) {
    matrix.push([]);

    for (let col = 0; col < 7; col++) {
      matrix[row][col] = -1;
      if (row === 1 && col >= firstDayOfMonth) {
        matrix[row][col] = { day: counter, id: `${counter}.${month}.${year}`, cell: true };
        counter++;
      } else if (row > 1 && counter <= numOfDays) {
        matrix[row][col] = { day: counter, id: `${counter}.${month}.${year}`, cell: true };
        counter++;
      } else if (row > 1 && counter > numOfDays) {
        matrix[row][col] = {
          day: counterAfter,
          id: `${counterAfter}.${month + 1}.${year}`,
          cell: true, 
          nextOrPrev: true
        };
        counterAfter++;
      }
    }
  }

  return changeMinusOnesToDates(matrix, month);
};

function changeMinusOnesToDates(matrix, month) {
  const adjustedMaxtrix = matrix;
  if (month === 0) month = 12;
  const prevMonthDates = daysInMonth[month - 1];

  let counterOne = 0;
  for (let i = adjustedMaxtrix[1].length - 1; i >= 0; i--) {
    if (adjustedMaxtrix[1][i] === -1) {
      adjustedMaxtrix[1][i] = {
        day: prevMonthDates - counterOne,
        id: `${prevMonthDates - counterOne}.${month - 1}.${year}`,
        cell: true, 
        nextOrPrev: true
      };
      counterOne++;
    }
  }

  return adjustedMaxtrix;
}

export { createCalendarMatrix };

// function drawCalendar(calendarMatrix = undefined){
// if(!calendarMatrix){
// calendarMatrix = createCalendarMatrix();
// }

// for(let row = 0; row < calendarMatrix.length; row++){

//     let div = document.createElement('DIV');
//     div.className = 'row';
//     wrapper.append(div);

//     for(let col = 0; col < calendarMatrix[row].length; col++){

//    let dayDiv = document.createElement('DIV');
//    dayDiv.className = calendarMatrix[row][col] !== -1?  'day' : 'day other_month' ;
//    dayDiv.innerText = calendarMatrix[row][col];
//    dayDiv.id = `${monthNames[month]}_${calendarMatrix[row][col]}`
//    div.append(dayDiv);
//     }

// }

// }

export function changeMonth(param) {
  month += param;
  if (month < 0) {
    month = 11;
    year -= 1;
  }
  if (month > 11) {
    month = 0;
    year += 1;
  }
  return createCalendarMatrix();
}

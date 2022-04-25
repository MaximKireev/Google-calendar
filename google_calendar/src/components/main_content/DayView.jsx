import { day_hours } from "../../utils/fixtures";
import { HourCell } from "./HourCell";
import '../../boot/index.css'


export const DayView = () => {
 

  return (
    <div className="day-view-wrapper">
      {day_hours.map((item) => (
        <HourCell value={item} />
      ))}
    </div>
  );
};
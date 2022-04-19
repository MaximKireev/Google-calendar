import { day_hours } from "./utils/fixtures";
import { HourCell } from "./HourCell";

export const DayView = () => {
  return (
    <div className="day-view-wrapper">
      {day_hours.map((item) => (
        <HourCell value={item} />
      ))}
    </div>
  );
};
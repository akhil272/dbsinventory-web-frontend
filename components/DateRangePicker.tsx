import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import moment from "moment";

const DateRangePicker = ({ state, setState }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  return (
    <div>
      <div
        onClick={() => setShowDatePicker(!showDatePicker)}
        className="flex text-sm w-full"
      >
        <div className="flex space-x-2 w-1/2">
          <label className="text-gray-400">From: </label>
          <label className="text-base font-semibold">
            {String(moment(state[0]?.startDate).format("MMM DD YYYY"))}
          </label>
        </div>
        <div className="flex space-x-2 w-1/2">
          <label className="text-gray-400">To: </label>
          <label className="text-base font-semibold">
            {String(moment(state[0]?.endDate).format("MMM DD YYYY"))}
          </label>
        </div>
      </div>
      {showDatePicker && (
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
      )}
    </div>
  );
};

export default DateRangePicker;

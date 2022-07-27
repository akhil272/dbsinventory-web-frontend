import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import moment from "moment";
import { subDays } from "date-fns";

interface DateData {
  startDate?: Date;
  endDate?: Date;
  key?: string;
}

const DateRangePicker = ({ setDates }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const onChange = (ranges) => {
    if (
      moment(ranges.startDate).format("MM-DD-YYYY") !==
      moment(ranges.endDate).format("MM-DD-YYYY")
    ) {
      setShowDatePicker(false);
    } else if (ranges.startDate === "" && ranges.endDate === "") {
      setShowDatePicker(false);
    }
  };
  const [state, setState] = useState<DateData[]>([
    {
      startDate: subDays(new Date(), 7),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const handleOnChange = (ranges) => {
    const { selection } = ranges;
    onChange(selection);
    setState([selection]);
    setDates({
      startDate: `${String(moment(selection?.startDate).format("L"))}`,
      endDate: `${String(moment(selection?.endDate).format("L"))}`,
    });
  };

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
          onChange={handleOnChange}
          moveRangeOnFirstSelection={false}
          ranges={state}
          maxDate={new Date()}
        />
      )}
    </div>
  );
};

export default DateRangePicker;

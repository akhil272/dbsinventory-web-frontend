import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import moment from "moment";
import { addDays, subDays } from "date-fns";

interface DateData {
  startDate?: Date;
  endDate?: Date;
  key?: string;
}

const DateRangePicker = ({ setDates, onChange, open, setOpen }) => {
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
  };

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
          onChange={(item) => {
            setState([item.selection]);
            setDates({
              startDate: `${String(
                moment(item.selection?.startDate).format("L")
              )}`,
              endDate: `${String(moment(item.selection?.endDate).format("L"))}`,
            });
          }}
          moveRangeOnFirstSelection={false}
          ranges={state}
          maxDate={new Date()}
        />
      )}
    </div>
  );
};

export default DateRangePicker;

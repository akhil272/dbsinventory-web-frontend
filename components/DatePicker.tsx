import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Calendar } from "react-date-range";
import { useState } from "react";
import { Controller } from "react-hook-form";
import moment from "moment";

const DatePicker = ({
  control,
  name,
  placeholder,
  error,
  defaultValue = new Date(),
}) => {
  const [showCalender, setShowCalender] = useState(false);

  return (
    <div>
      <Controller
        defaultValue={defaultValue}
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <div className="relative flex flex-col">
            <input
              onClick={() => setShowCalender(!showCalender)}
              className="p-2  w-full rounded-lg"
              placeholder={placeholder}
              value={moment(value).format("DD/MM/YYYY")}
              onChange={onChange}
              type="string"
              onBlur={onBlur}
              onKeyDown={(e) => e.preventDefault()}
            />
            {showCalender && (
              <Calendar
                className="absolute top-12 left-0 rounded-lg z-10"
                date={value}
                onChange={(e) => {
                  onChange(e), setShowCalender(!showCalender);
                }}
              />
            )}
          </div>
        )}
      />
      <p className="text-sm text-red-600">{error}</p>
    </div>
  );
};

export default DatePicker;

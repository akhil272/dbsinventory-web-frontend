import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Calendar } from "react-date-range";
import { useState } from "react";
import { Controller } from "react-hook-form";

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
          <div className="relative">
            <input
              onClick={() => setShowCalender(!showCalender)}
              className="p-2 relative  w-full rounded-lg"
              placeholder={placeholder}
              value={value.toLocaleDateString("en-US")}
              onChange={onChange}
              type="text"
              onBlur={onBlur}
            />
            {showCalender && (
              <Calendar
                className="absolute top-12 left-0 rounded-lg z-10"
                date={new Date()}
                onChange={onChange}
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

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Calendar } from "react-date-range";
import { useState } from "react";
import { Controller } from "react-hook-form";

const DatePicker = ({ control, name, placeholder, error }) => {
  const [showCalender, setShowCalender] = useState(false);

  return (
    <div>
      <Controller
        defaultValue={new Date()}
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <div onClick={() => setShowCalender(!showCalender)}>
            <input
              className="p-3 shadow-md w-full rounded-lg my-2"
              placeholder={placeholder}
              value={value.toLocaleDateString("en-US")}
              onChange={onChange}
              type="text"
              onBlur={onBlur}
            />
            {showCalender && <Calendar date={new Date()} onChange={onChange} />}
          </div>
        )}
      />
      <p className="text-sm text-red-600">{error}</p>
    </div>
  );
};

export default DatePicker;

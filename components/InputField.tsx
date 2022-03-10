import React from "react";

const InputField = ({ onChange, placeholder }) => {
  return (
    <input
      className="p-3 shadow-md w-full rounded-lg"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default InputField;

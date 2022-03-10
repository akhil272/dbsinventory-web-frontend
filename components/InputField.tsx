import React from "react";

const InputField = ({ placeholder, register, error }) => {
  return (
    <>
      <input
        className="p-3 shadow-md w-full rounded-lg my-2"
        placeholder={placeholder}
        {...register}
      />
      <p className="text-sm text-red-600">{error}</p>
    </>
  );
};

export default InputField;

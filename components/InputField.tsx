import React from "react";

interface InputFieldProps {
  placeholder: string;
  register: any;
  error: any;
  type?: string;
}

const InputField = ({
  placeholder,
  register,
  error,
  type,
}: InputFieldProps) => {
  return (
    <>
      <input
        className="p-3 shadow-md w-full rounded-lg my-2"
        placeholder={placeholder}
        {...register}
        type={type}
      />
      <p className="text-sm text-red-600">{error}</p>
    </>
  );
};

export default InputField;

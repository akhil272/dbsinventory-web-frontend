import EyeInvisibleOutlined from "@ant-design/icons/lib/icons/EyeInvisibleOutlined";
import EyeOutlined from "@ant-design/icons/lib/icons/EyeOutlined";
import { useState } from "react";
import { Controller } from "react-hook-form";

interface InputFieldProps {
  placeholder: string;
  error: any;
  type?: string;
  autoComplete?: string;
  name: string;
  control: any;
}

const InputField = ({
  placeholder,
  error,
  type,
  autoComplete,
  name,
  control,
}: InputFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      {type === "password" ? (
        <Controller
          defaultValue=""
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value } }) => (
            <div className="flex relative">
              <input
                className="p-3 shadow-md w-full rounded-lg my-2"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                type={showPassword ? "text" : "password"}
                onBlur={onBlur}
                autoComplete={autoComplete}
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 bottom-5"
              >
                {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
              </div>
            </div>
          )}
        />
      ) : (
        <Controller
          defaultValue=""
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value } }) => (
            <input
              className="p-3 shadow-md w-full rounded-lg my-2"
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              type="text"
              onBlur={onBlur}
              autoComplete={autoComplete}
            />
          )}
        />
      )}
      <p className="text-sm text-red-600">{error}</p>
    </>
  );
};

export default InputField;

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
  defaultValue?: string;
}

const InputField = ({
  placeholder,
  error,
  type = "text",
  autoComplete,
  name,
  control,
  defaultValue = "",
}: InputFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="space-y-1">
      {type === "password" && (
        <Controller
          defaultValue={defaultValue}
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value } }) => (
            <div className="flex relative">
              <input
                className="p-2  w-full rounded-md"
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
      )}
      <Controller
        defaultValue={defaultValue}
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <input
            className="p-2 placeholder-slate-400 focus:outline-none  focus:ring-slate-400 block w-full rounded-md  focus:ring-1 "
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            type={type}
            onBlur={onBlur}
            autoComplete={autoComplete}
            inputMode={
              type === "number" ? "numeric" : type === "tel" ? "tel" : "text"
            }
            pattern={
              type === "number"
                ? "[0-9]*"
                : type === "tel"
                ? 'pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"'
                : "none"
            }
          />
        )}
      />

      <p className="text-sm text-red-600 px-2">{error}</p>
    </div>
  );
};

export default InputField;

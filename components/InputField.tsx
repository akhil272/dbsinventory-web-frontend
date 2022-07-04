import { Controller } from "react-hook-form";

interface InputFieldProps {
  placeholder: string;
  error: any;
  type?: string;
  autoComplete?: string;
  name: string;
  control: any;
  defaultValue?: string;
  inputMode?:
    | "text"
    | "search"
    | "email"
    | "tel"
    | "url"
    | "none"
    | "numeric"
    | "decimal";
}

const InputField = ({
  placeholder,
  error,
  type = "text",
  autoComplete,
  name,
  control,
  defaultValue = "",
  inputMode = "text",
}: InputFieldProps) => {
  return (
    <div className="space-y-1">
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
            inputMode={inputMode}
          />
        )}
      />

      <p className="text-sm text-red-600 px-2">{error}</p>
    </div>
  );
};

export default InputField;

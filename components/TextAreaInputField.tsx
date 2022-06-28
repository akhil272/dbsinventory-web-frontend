import { Controller } from "react-hook-form";

interface TextAreaInputFieldProps {
  placeholder: string;
  error: any;
  name: string;
  control: any;
  defaultValue?: string;
}

const TextAreaInputField = ({
  placeholder,
  error,
  name,
  control,
  defaultValue = "",
}: TextAreaInputFieldProps) => {
  return (
    <div className="space-y-1">
      <Controller
        defaultValue={defaultValue}
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <textarea
            className="p-2 placeholder-slate-400 focus:outline-none  focus:ring-slate-400 block w-full  focus:ring-1 resize-y rounded-md "
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
      />

      <p className="text-sm text-red-600 px-2">{error}</p>
    </div>
  );
};

export default TextAreaInputField;

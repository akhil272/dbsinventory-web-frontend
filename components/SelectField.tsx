type itemProps = {
  id: number;
  name: string;
};

type SelectFieldProps = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  customerCategories: itemProps[];
};

const SelectField = ({ onChange, customerCategories }: SelectFieldProps) => {
  return (
    <div>
      <div>
        <select
          onChange={onChange}
          className="form-select appearance-none
        px-2
        py-1
        text-xs
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
        >
          <option defaultValue="">Select customer category</option>
          {customerCategories?.map((item: itemProps) => (
            <option key={item.id}>{item.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectField;

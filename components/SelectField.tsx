import Select from "react-select";
type itemProps = {
  id: number;
  name: string;
};

type SelectFieldProps = {
  onChange: (label: string) => void;
  customerCategories: itemProps[];
};

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "black" : "gray",
    padding: 10,
  }),

  input: (provided) => ({
    ...provided,
    padding: 4,
  }),
  control: (base) => ({
    ...base,
    boxShadow: "none",
  }),
  placeholder: (provided) => ({
    ...provided,

    width: "100%",
  }),
  container: (provided) => ({
    ...provided,
    width: "100%",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";
    return { ...provided, opacity, transition };
  },
};

const SelectField = ({ onChange, customerCategories }: SelectFieldProps) => {
  return (
    <div>
      <Select
        isSearchable={false}
        styles={customStyles}
        placeholder="Select customer category"
        onChange={(e) => onChange(e.label)}
        isClearable={false}
        options={customerCategories?.map(({ name, id }) => ({
          label: name,
          value: id,
        }))}
      />
    </div>
  );
};

export default SelectField;

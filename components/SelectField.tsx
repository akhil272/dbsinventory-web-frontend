const SelectField = ({ onChange, customerCategories }) => {
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
          <option selected>Select customer category</option>
          {customerCategories.map((item) => (
            <option key={item.id}>{item.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectField;

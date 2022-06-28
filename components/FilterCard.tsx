import { useState } from "react";
import SelectField from "./SelectField";

const FilterCard = ({
  sortBy,
  setSortBy,
  setSearchByPhoneNumber,
  customerCategories,
  onChange,
}) => {
  const [userInput, setUserInput] = useState("");
  const handleUserInputChange = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  const searchUserByPhoneNumber = () => {
    setSearchByPhoneNumber(userInput);
  };

  return (
    <div className="p-2 bg-white my-4 rounded-md">
      <div>
        <h4 className="text-gray-500 text-center text-md">Filters</h4>
        <div className="flex flex-col justify-around text-xs pb-2">
          <div className="flex justify-around pb-2">
            <div
              onClick={() => setSortBy("ASC")}
              className={`px-2 py-1 rounded-md  ${
                sortBy === "ASC" ? "bg-gray-300" : "bg-gray-50"
              }`}
            >
              Date Asc
            </div>
            <div
              onClick={() => setSortBy("DESC")}
              className={`px-2 py-1 rounded-md  ${
                sortBy === "DESC" ? "bg-gray-300" : "bg-gray-50"
              }`}
            >
              Date Dsc
            </div>
            <div>
              <SelectField
                onChange={onChange}
                customerCategories={customerCategories}
              />
            </div>
          </div>

          <div className="flex relative">
            <input
              className="text-center px-1 py-1 border-2 w-full focus:outline-none  border-gray-200 rounded-md "
              type="text"
              placeholder="Search customer by phone number or name"
              value={userInput}
              onChange={handleUserInputChange}
            />
            <div
              onClick={searchUserByPhoneNumber}
              className="absolute text-center p-1 bg-gray-200 h-full right-0 rounded-r-md"
            >
              Go
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCard;

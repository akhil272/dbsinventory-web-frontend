import { useState } from "react";

const FilterCard = ({ sortBy, setSortBy }) => {
  const [userInput, setUserInput] = useState("");
  const handleUserInputChange = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  return (
    <div className="p-2 bg-white my-4 rounded-md">
      <div>
        <h4 className="text-gray-500 text-center text-md">Filters</h4>
        <div className="flex justify-around text-xs">
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
          <div className="flex relative">
            <input
              className="text-center px-1 border-2 focus:outline-none  border-gray-300 rounded-md "
              type="text"
              placeholder="Search customer"
              value={userInput}
              onChange={handleUserInputChange}
            />
            <div className="absolute text-center p-1 bg-gray-200 h-full right-0">
              Go
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCard;

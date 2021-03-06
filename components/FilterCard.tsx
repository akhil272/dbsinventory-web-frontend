import { CustomerCategoryPayload } from "@Store/customers/types";
import { useState } from "react";
import SelectField from "./SelectField";

type FilterCardProps = {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  setSearchByPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  customerCategories: CustomerCategoryPayload[];
  onChange: (label: string) => void;
  onViewDeletedUsers: () => void;
  viewDeletedUsers: boolean;
};

const FilterCard = ({
  sortBy,
  setSortBy,
  setSearchByPhoneNumber,
  customerCategories,
  onChange,
  onViewDeletedUsers,
  viewDeletedUsers,
}: FilterCardProps) => {
  const [userInput, setUserInput] = useState("");
  const handleUserInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  const searchUserByPhoneNumber = () => {
    setSearchByPhoneNumber(userInput);
  };

  return (
    <div className="p-2 bg-white rounded-md">
      <div>
        <h4 className="text-gray-500 text-center text-base">Filters</h4>
        <div className="flex flex-col justify-around text-xs ">
          <div className="flex items-center  justify-between pb-2">
            <div
              onClick={() => setSortBy("ASC")}
              className={`px-2 py-2 rounded-md  ${
                sortBy === "ASC" ? "bg-gray-300" : "bg-gray-50"
              }`}
            >
              Date Asc
            </div>
            <div
              onClick={() => setSortBy("DESC")}
              className={`px-2 py-2 rounded-md  ${
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

          <div className="flex text-sm relative">
            <input
              className=" p-1.5 border-2 w-full focus:outline-none  border-gray-200 rounded-md "
              type="text"
              placeholder="Search customer by mobile or name"
              value={userInput}
              onChange={handleUserInputChange}
            />
            <div
              onClick={searchUserByPhoneNumber}
              className="absolute p-1.5 px-5 flex items-center bg-gray-200 h-full right-0 rounded-r-md active:bg-gray-50 active:text-gray-400"
            >
              Go
            </div>
          </div>
          <div className="flex items-end justify-end">
            <p className="text-sm pt-2">
              <span onClick={onViewDeletedUsers} className="text-primary">
                {viewDeletedUsers ? "Hide deleted" : "View deleted"}
              </span>{" "}
              users quotation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCard;

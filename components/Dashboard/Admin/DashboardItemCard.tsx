import React from "react";

const DashboardItemCard = ({ title, value }) => {
  return (
    <div className="bg-white rounded-md p-2 h-32 w-full my-2">
      <div className="flex items-center justify-center">
        <div className="flex relative w-1/2 items-center justify-center  h-28 ">
          <div className="bg-gray-200 rounded-md w-full h-full " />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-32 w-32 absolute top-0 fill-slate-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
        </div>
        <div className="p-2 w-1/2 ">
          <div className="text-lg text-gray-500 leading-5">{title}</div>
          <div className="text-6xl font-bold">{value}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardItemCard;

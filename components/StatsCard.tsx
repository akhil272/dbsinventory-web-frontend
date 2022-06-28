import React from "react";

const StatsCard = ({ title, value, artCover }) => {
  return (
    <div className="bg-white rounded-md p-2 h-32 w-full my-6">
      <div className="flex items-center justify-center">
        <div className="flex relative w-1/2 items-center justify-center  h-28 ">
          <div className="bg-gray-200 rounded-md w-full h-full " />
          <img className="h-32 bottom-0 absolute" src={artCover} />
        </div>
        <div className="p-2 w-1/2 ">
          <div className="text-lg text-gray-500">{title}</div>
          <div className="text-6xl font-bold">{value ?? "0"}</div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;

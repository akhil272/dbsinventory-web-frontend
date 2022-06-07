import React from "react";

const QuoteListCard = ({
  brand,
  pattern,
  tyreSize,
  load_index,
  speed_rating,
  notes,
  quantity,
  id,
}) => {
  return (
    <div className="bg-white p-2 rounded-md mb-4">
      <h3 className="font-semibold text-md border-b-2 my-2 border-primary">
        #{id}
      </h3>
      <div className="flex flex-col space-y-2">
        <div className="flex">
          <div className="flex w-1/2">
            <div className="flex flex-col -space-y-1">
              <label className="text-xs text-gray-400">Brand</label>
              <label>{brand}</label>
            </div>
          </div>
          <div className="flex w-1/2">
            <div className="flex flex-col -space-y-1">
              <label className="text-xs text-gray-400">Pattern</label>
              <label>{pattern}</label>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex w-1/2">
            <div className="flex flex-col -space-y-1">
              <label className="text-xs text-gray-400">Tyre Size</label>
              <label>{tyreSize}</label>
            </div>
          </div>
          <div className="flex w-1/2">
            <div className="flex flex-col -space-y-1">
              <label className="text-xs text-gray-400">Quantity</label>
              <label>{quantity}</label>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex w-1/2">
            <div className="flex flex-col -space-y-1">
              <label className="text-xs text-gray-400">Load Index</label>
              <label>{load_index ? `${load_index}` : "-"}</label>
            </div>
          </div>
          <div className="flex w-1/2">
            <div className="flex flex-col -space-y-1">
              <label className="text-xs text-gray-400">Speed Rating</label>
              <label>{speed_rating ? `${speed_rating}` : "-"}</label>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex w-full">
            <div className="flex flex-col -space-y-1">
              <label className="text-xs text-gray-400">Notes</label>
              <label>{notes ? `${notes}` : "-"}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteListCard;

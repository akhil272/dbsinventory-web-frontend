import React from "react";
interface QuoteListCardProps {
  brand: string;
  pattern?: string;
  tyre_size: string;
  load_index?: number | string;
  speed_rating?: string;
  notes: string;
  id: number;
  quantity: number;
  admin_comments?: string;
  type?: string;
  price?: number;
}
const QuoteListCard = ({
  brand,
  pattern,
  tyre_size,
  load_index,
  speed_rating,
  notes,
  quantity,
  id,
  type = "basic",
  price,
  admin_comments,
}: QuoteListCardProps) => {
  return (
    <div className="bg-white p-2 rounded-md mb-4">
      <h3
        className={`font-semibold text-md border-b-2 my-2 ${
          price ? "border-pastel_green" : "border-primary"
        }`}
      >
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
              <label>{tyre_size}</label>
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
              <label className="text-sm">{notes ? `${notes}` : "-"}</label>
            </div>
          </div>
        </div>
        {type === "advanced" && (
          <div className="flex ">
            <div className="flex flex-col space-y-2 w-full">
              <div className="flex flex-col -space-y-1">
                <label className="text-xs text-gray-400">Comments</label>
                <label className="text-sm">
                  {admin_comments ? `${admin_comments}` : "-"}
                </label>
              </div>
              <div className="flex flex-col -space-y-1">
                <label className="text-xs text-gray-400">Price</label>
                <label className="text-primary font-semibold">
                  {price ? `Rs. ${price}` : "-"}
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteListCard;

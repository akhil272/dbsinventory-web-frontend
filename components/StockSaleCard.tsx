import moment from "moment";
import React from "react";

interface StockSaleCardProps {
  employee_name: string;
  salePrice: number;
  customerName: string;
  saleDate: Date;
  quantity: number;
  profit: number;
  id: number;
  onRemove: (id: number) => void;
}

const StockSaleCard = ({
  employee_name,
  salePrice,
  customerName,
  saleDate,
  quantity,
  profit,
  id,
  onRemove,
}: StockSaleCardProps) => {
  return (
    <div className="flex mt-4">
      <div className="bg-pastel_green py-2 text-white px-2  w-3/5 rounded-l-xl">
        <div className="px-2 pt-2 -space-y-1 ">
          <div className="text-sm">Sold Date</div>
          <div className="text-base font-semibold">
            {moment(saleDate).format("DD/MM/YYYY")}
          </div>
        </div>
        <div className="px-2 pt-2 -space-y-1 ">
          <div className="text-sm">Customer Name</div>
          <div className="text-base font-semibold">{customerName}</div>
        </div>
      </div>
      <div className="flex flex-col w-3/5 bg-white  rounded-r-xl">
        <div className="px-2 pt-1 justify-evenly flex">
          <div className="flex-col -space-y-1 px-2">
            <div className=" pt-2 text-sm">Employee</div>
            <div className="text-base font-semibold">{employee_name}</div>
            <div className="pt-2 text-sm">Quantity</div>
            <div className="text-base font-semibold">{quantity}</div>
          </div>
          <div className="flex-col -space-y-1 px-2">
            <div className=" pt-2 text-sm">Sale Price</div>
            <div className="text-base font-semibold">Rs. {salePrice}</div>
            <div className="pt-2 text-sm">Profit/Loss</div>
            <div className="text-base font-semibold text-primary">{profit}</div>
          </div>
        </div>
        <div className="flex items-end justify-end">
          <button
            onClick={() => onRemove(id)}
            className="text-primary text-sm p-2"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default StockSaleCard;

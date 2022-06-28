import moment from "moment";
import React from "react";

const StockSaleCard = ({
  employee_name,
  salePrice,
  customerName,
  saleDate,
  quantity,
  profit,
}) => {
  return (
    <div className="flex mt-4">
      <div className="bg-pastel_green  text-white px-2 py-2 w-3/5 rounded-l-xl">
        <div className="px-2 pt-4 -space-y-1 ">
          <div className="text-sm">Sold Date</div>
          <div className="text-md font-semibold">
            {moment(saleDate).format("DD/MM/YYYY")}
          </div>
        </div>
        <div className="px-2 pt-2 -space-y-1 ">
          <div className="text-sm">Customer Name</div>
          <div className="text-md font-semibold">{customerName}</div>
        </div>
      </div>
      <div className="flex flex-col w-3/5 bg-white py-2 rounded-r-xl">
        <div className="px-2 pt-2 justify-evenly flex">
          <div className="flex-col -space-y-1 px-2">
            <div className=" pt-2 text-sm">Employee</div>
            <div className="text-md font-semibold">{employee_name}</div>
            <div className="pt-2 text-sm">Quantity</div>
            <div className="text-md font-semibold">{quantity}</div>
          </div>
          <div className="flex-col -space-y-1 px-2">
            <div className=" pt-2 text-sm">Sale Price</div>
            <div className="text-md font-semibold">Rs. {salePrice}</div>
            <div className="pt-2 text-sm">Profit/Loss</div>
            <div className="text-md font-semibold text-primary">{profit}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockSaleCard;

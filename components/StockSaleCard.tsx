import moment from "moment";
import React from "react";

const StockSaleCard = ({
  employee_name,
  sold_price,
  customer_name,
  sale_date,
  quantity,
}) => {
  return (
    <div className="max-w-xl">
      <div className="flex mt-4">
        <div className="bg-pastel_green  text-white px-2 py-2 w-2/5 rounded-l-xl">
          <div className="px-2 pt-4 -space-y-1 ">
            <div className="text-sm">Sold Date</div>
            <div className="text-md font-semibold">
              {moment(sale_date).format("DD/MM/YYYY")}
            </div>
          </div>
          <div className="px-2 pt-2 -space-y-1 ">
            <div className="text-sm">Customer Name</div>
            <div className="text-md font-semibold">{customer_name}</div>
          </div>
        </div>
        <div className="flex flex-col w-3/5 bg-white py-2 rounded-r-xl">
          <div className="px-2 pt-2 flex">
            <div className="flex-col -space-y-1 px-2">
              <div className=" pt-2 text-sm">Employee Name</div>
              <div className="text-md font-semibold">{employee_name}</div>
              <div className="pt-2 text-sm">Quantity</div>
              <div className="text-md font-semibold">{quantity}</div>
              <div className="text-sm">Sale Price</div>
              <div className="text-md text-primary font-semibold">
                Rs. {sold_price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockSaleCard;

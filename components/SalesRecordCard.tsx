import moment from "moment";
import React from "react";

const SalesRecordCard = ({
  employee_name,
  sold_price,
  customer_name,
  sale_date,
  quantity,
}) => {
  return (
    <div className="rounded-lg bg-zinc-300  my-4 shadow-md">
      <div className="bg-[#2C3359] rounded-t-lg p-2 flex text-white">
        <div className="flex-col w-1/2 px-2">
          <div className="text-lg font-semibold">
            {moment(sale_date).format("DD/MM/YYYY")}
          </div>
        </div>
      </div>
      <div>
        <div className="px-2 pt-2 flex">
          <div className="flex-col w-1/2 px-2">
            <div className=" pt-2 text-sm">Customer Name</div>
            <div className="text-lg font-semibold">{customer_name}</div>
            <div className=" pt-2 text-sm">Quantity</div>
            <div className="text-lg font-semibold">{quantity}</div>
          </div>
          <div className="flex-col w-1/2 px-2">
            <div className=" pt-2 text-sm">Sold by employee</div>
            <div className="text-lg font-semibold">{employee_name}</div>
          </div>
        </div>

        <div className="bg-red-500 text-white flex px-4 p-3 rounded-b-lg font-bold mb-10">
          <div className="  w-1/2 ">
            <div>Sale Price</div>
          </div>
          <div className=" px-2 w-1/2">
            <div>Rs.{sold_price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesRecordCard;

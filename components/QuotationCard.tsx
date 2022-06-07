import moment from "moment";
import { useRouter } from "next/router";
import React, { useState } from "react";

const QuotationCard = ({
  name,
  price,
  notes,
  date,
  count,
  status,
  id,
  validity,
}) => {
  const color =
    status === "PENDING"
      ? "bg-pending text-white "
      : status === "WAITING"
      ? "bg-waiting text-white"
      : status === "ACCEPTED"
      ? "bg-accepted text-white"
      : "bg-followup text-white";
  const router = useRouter();
  const handleClick = () => {
    router.push({ pathname: "/quotations/view", query: { quotationId: id } });
  };
  return (
    <div onClick={handleClick} className=" space-y-2 my-4 bg-white rounded-md">
      <div className={`flex p-2 rounded-t-md ${color} `}>
        <div className="w-1/2 flex-col flex">
          <label className="text-xs text-gray-100">Customer Name</label>
          <label>{name}</label>
        </div>
        <div className="w-1/2 flex-col flex">
          <label className="text-xs text-gray-100">Created at</label>
          <label>{moment(date).format("MMM Do YYYY")}</label>
        </div>
      </div>
      <div className="flex px-2">
        <div className="w-1/2 flex-col flex">
          <label className="text-xs text-gray-400">No. of quotes</label>
          <label>{count}</label>
        </div>
        <div className="w-1/2 flex-col flex">
          <label className="text-xs text-gray-400">Total Price</label>
          <label className="text-primary font-semibold">Rs. {price}</label>
        </div>
      </div>
      <div className="flex px-2">
        <div className="w-1/2 flex-col flex">
          <label className="text-xs text-gray-400">Validity</label>
          <label>{validity}</label>
        </div>
      </div>
      <div className="flex px-2 py-2 flex-col">
        <label className="text-xs text-gray-400">Notes</label>
        <label>{notes}</label>
      </div>
    </div>
  );
};

export default QuotationCard;

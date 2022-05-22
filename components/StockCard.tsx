import React from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import moment from "moment";
import { useRouter } from "next/router";

interface StockItemProps {
  brand?: string;
  vendor?: string;
  tyre_size?: string;
  pattern_name?: string;
  dom: string;
  product_line: string;
  transport_mode?: string;
  purchase_date?: string | Date;
  location: string;
  quantity: number | string;
  cost: number | string;
  stockId?: number;
}

const StockCard = ({
  brand,
  vendor,
  tyre_size,
  pattern_name,
  dom,
  product_line,
  transport_mode,
  purchase_date,
  location,
  quantity,
  cost,
  stockId,
}: StockItemProps) => {
  const router = useRouter();
  const onEditOrder = (id: number) => {
    router.push(`/orders/${id}`);
  };
  // const onDeleteStock = (id: string) => {
  //   router.push(`/stock/delete/${id}`);
  // };
  // const userRole = useSelector((state: RootStore) => state.auth.userRole);

  return (
    <div className="lg:px-96">
      <div className="flex mt-4">
        <div className="bg-secondary space-y-4 text-white px-2 py-4 w-1/3 rounded-l-xl">
          <div className="px-2 pt-4 -space-y-1 ">
            <div className="text-sm">Brand</div>
            <div className="text-md font-semibold">{brand}</div>
            <div className="text-lg font-semibold">{tyre_size}</div>
          </div>
          <div className="px-2 pt-2 -space-y-1 ">
            <div className="text-sm">Pattern</div>
            <div className="text-md font-semibold">{pattern_name}</div>
          </div>
          <div className="px-2 pt-2">
            <div className="text-md font-semibold">Rs. {cost}</div>
          </div>
        </div>
        <div className="flex flex-col w-2/3 bg-white py-4 space-y-3  rounded-r-xl">
          <div className="px-2 pt-2 flex">
            <div className="flex-col -space-y-1 w-1/2 px-2">
              <div className=" pt-2 text-sm">Purchase Date</div>
              <div className="text-md font-semibold">
                {moment(purchase_date).format("DD/MM/YYYY")}
              </div>
              <div className="pt-2 text-sm">Transport</div>
              <div className="text-md font-semibold">{transport_mode}</div>
              <div className=" pt-2 text-sm">DOM</div>
              <div className="text-md font-semibold">{dom}</div>
            </div>
            <div className="px-2 w-1/2 -space-y-1 ">
              <div className=" pt-2 text-sm">Product Line</div>
              <div className="text-md font-semibold">{product_line}</div>
              <div className=" pt-2 text-sm">Location</div>
              <div className="text-md font-semibold">{location}</div>
              <div className=" pt-2 text-sm">Quantity</div>
              <div className="text-md font-semibold">{quantity}</div>
            </div>
          </div>
          <div className="flex text-white text-sm justify-around px-2 ">
            <div className="p-2 rounded-lg  bg-secondary">Update</div>
            <div className="p-2 rounded-lg  bg-secondary">Delete</div>
            <div
              onClick={() => onEditOrder(stockId)}
              className="p-2 rounded-lg  bg-secondary"
            >
              Add Sale
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockCard;

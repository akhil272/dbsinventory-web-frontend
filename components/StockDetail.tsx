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

const StockDetail = ({
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
      <div className="rounded-lg bg-zinc-300  shadow-md">
        <div className="bg-[#2C3359] rounded-t-lg p-2 flex text-white">
          <div className="flex-col w-1/2 px-2">
            <div className=" pt-2 text-sm">Brand</div>
            <div className="text-lg font-semibold">{brand}</div>
          </div>
          <div className="flex-col w-1/2  px-2">
            <div className="flex items-center">
              <div className="flex-col w-1/2 ">
                <div className=" pt-2 text-sm">Vendor</div>
                <div className="text-lg font-semibold">{vendor}</div>
              </div>
              <div className="flex-col w-1/2 ">
                <div
                  className="justify-end py-1 flex"
                  onClick={() => onEditOrder(stockId)}
                >
                  <EditOutlined />
                </div>
                {/* {userRole === "admin" && (
                  <div
                    // onClick={() => onDeleteStock(stockId)}
                    className="justify-end py-1 flex"
                  >
                    <DeleteOutlined />
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="px-2 pt-2 flex">
            <div className="flex-col w-1/2 px-2">
              <div className=" pt-2 text-sm">Size</div>
              <div className="text-lg font-semibold">{tyre_size}</div>
              <div className=" pt-2 text-sm">Pattern</div>
              <div className="text-lg font-semibold">{pattern_name}</div>
            </div>
            <div className="px-2 w-1/2 ">
              <div className=" pt-2 text-sm">DOM</div>
              <div className="text-lg font-semibold">{dom}</div>
              <div className=" pt-2 text-sm">Product Line</div>
              <div className="text-lg font-semibold">{product_line}</div>
            </div>
          </div>
          <div className="px-2 flex">
            <div className=" px-2 w-1/2">
              <div className=" pt-2 text-sm">Transport</div>
              <div className="text-lg font-semibold">{transport_mode}</div>
              <div className=" pt-2 text-sm">Purchase Date</div>
              <div className="text-lg font-semibold">
                {moment(purchase_date).format("DD/MM/YYYY")}
              </div>
            </div>
            <div className=" px-2 w-1/2">
              <div className=" pt-2 text-sm">Location</div>
              <div className="text-lg font-semibold">{location}</div>
              <div className=" pt-2 text-sm">Quantity</div>
              <div className="text-lg font-semibold">{quantity}</div>
            </div>
          </div>

          <div className="bg-red-500 text-white flex px-4 p-3 rounded-b-lg font-bold mb-10">
            <div className="  w-1/2 ">
              <div>COST</div>
            </div>
            <div className=" px-2 w-1/2">
              <div>Rs.{cost}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDetail;

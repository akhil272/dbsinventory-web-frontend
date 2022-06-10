import moment from "moment";
import Link from "next/link";
import { stringify } from "querystring";

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
  role: string;
  load_index?: number;
  speed_rating?: string;
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
  role,
  load_index,
  speed_rating,
}: StockItemProps) => {
  return (
    <div className="lg:px-96">
      <div className="flex mt-4">
        <div className="bg-secondary space-y-3 text-white px-2 pb-3 w-1/3 rounded-l-xl">
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
            <div className="text-md font-semibold">
              {role === "user" || role == undefined
                ? "Contact Us"
                : `Rs. ${cost}`}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-2/3 bg-white pb-3 space-y-3  rounded-r-xl">
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
              <div className=" pt-2 text-sm">Speed Rating</div>
              <div className="text-md font-semibold">
                {speed_rating ? `${speed_rating}` : "N/A"}
              </div>
            </div>
            <div className="px-2 w-1/2 -space-y-1 ">
              <div className=" pt-2 text-sm">Product Line</div>
              <div className="text-md font-semibold">{product_line}</div>
              <div className=" pt-2 text-sm">Location</div>
              <div className="text-md font-semibold">{location}</div>
              <div className=" pt-2 text-sm">Quantity</div>
              <div className="text-md font-semibold">{quantity}</div>
              <div className=" pt-2 text-sm">Load Index</div>
              <div className="text-md font-semibold">
                {load_index ? `${load_index}` : "N/A"}
              </div>
            </div>
          </div>

          <div className="flex text-white text-sm justify-between px-2 ">
            {role === "admin" && (
              <Link
                href={{
                  pathname: "/stocks/update",
                  query: { stockId },
                }}
              >
                <a className="p-2 rounded-lg  bg-secondary">Update</a>
              </Link>
            )}
            {role === "admin" && (
              <Link
                href={{
                  pathname: "/stocks/delete",
                  query: { stockId, brand, tyre_size, quantity, cost },
                }}
              >
                <a className="p-2 rounded-lg  bg-secondary">Delete</a>
              </Link>
            )}
            {role != "user" && role != undefined && (
              <Link href={{ pathname: "/orders", query: { stockId } }}>
                <a className="p-2 rounded-lg  bg-secondary">Add Sale</a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockCard;

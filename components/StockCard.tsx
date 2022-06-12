import moment from "moment";
import Link from "next/link";

interface StockItemProps {
  brand?: string;
  vendor?: string;
  tyreSize?: string;
  patternName?: string;
  dom: string;
  productLine: string;
  transportMode?: string;
  purchaseDate?: string | Date;
  location: string;
  quantity: number | string;
  cost: number | string;
  stockId?: number;
  role: string;
  loadIndex?: number;
  speedRating?: string;
}

const StockCard = ({
  brand,
  vendor,
  tyreSize,
  patternName,
  dom,
  productLine,
  transportMode,
  purchaseDate,
  location,
  quantity,
  cost,
  stockId,
  role,
  loadIndex,
  speedRating,
}: StockItemProps) => {
  return (
    <div className="flex mt-4">
      <div className="bg-secondary space-y-3 text-white px-2 pb-3 w-1/3 rounded-l-xl">
        <div className="px-2 pt-4 -space-y-1 ">
          <div className="text-sm">Brand</div>
          <div className="text-md font-semibold">{brand}</div>
          <div className="text-lg font-semibold">{tyreSize}</div>
        </div>
        <div className="px-2 pt-2 -space-y-1 ">
          <div className="text-sm">Pattern</div>
          <div className="text-md font-semibold">{patternName}</div>
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
              {moment(purchaseDate).format("DD/MM/YYYY")}
            </div>
            <div className="pt-2 text-sm">Transport</div>
            <div className="text-md font-semibold">{transportMode}</div>
            <div className=" pt-2 text-sm">DOM</div>
            <div className="text-md font-semibold">{dom}</div>
            <div className=" pt-2 text-sm">Speed Rating</div>
            <div className="text-md font-semibold">
              {speedRating ? `${speedRating}` : "N/A"}
            </div>
          </div>
          <div className="px-2 w-1/2 -space-y-1 ">
            <div className=" pt-2 text-sm">Product Line</div>
            <div className="text-md font-semibold">{productLine}</div>
            <div className=" pt-2 text-sm">Location</div>
            <div className="text-md font-semibold">{location}</div>
            <div className=" pt-2 text-sm">Quantity</div>
            <div className="text-md font-semibold">{quantity}</div>
            <div className=" pt-2 text-sm">Load Index</div>
            <div className="text-md font-semibold">
              {loadIndex ? `${loadIndex}` : "N/A"}
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
                query: { stockId, brand, tyreSize, quantity, cost },
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
  );
};

export default StockCard;

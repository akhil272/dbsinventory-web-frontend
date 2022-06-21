import moment from "moment";

type OrderCardProps = {
  id: number;
  salePrice: number;
  saleDate: Date;
  quantity: number;
};

const OrderCard = ({ id, salePrice, saleDate, quantity }: OrderCardProps) => {
  return (
    <div className=" space-y-2 my-4 bg-white rounded-md">
      <div className={`flex p-2 rounded-t-md  `}>
        <div className="w-1/2 flex-col flex">
          <label className="text-xs text-gray-500">Sale Date</label>
          <label>{moment(saleDate).format("MMM Do YYYY")}</label>
        </div>
      </div>
      <div className="flex px-2">
        <div className="w-1/2 flex-col flex">
          <label className="text-xs text-gray-400">Quantity</label>
          <label>{quantity}</label>
        </div>
        <div className="w-1/2 flex-col flex">
          <label className="text-xs text-gray-400">Price</label>
          <label>{salePrice ? `Rs. ${salePrice}` : "N/A"}</label>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;

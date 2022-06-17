import { QuotationService } from "@Store/quotations/types";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import ServiceTags from "./ServiceTags";

type QuotationCardProps = {
  name: string;
  price: number;
  notes: string;
  date: Date;
  count: number;
  status: string;
  id: number;
  validity: number;
  phoneNumber?: string;
  quotationsCount?: number;
  customerCategory?: string;
  mode?: "view" | "update";
  customerId?: number;
  services?: QuotationService[];
};

const QuotationCard = ({
  name,
  price,
  notes,
  date,
  count,
  status,
  id,
  validity,
  phoneNumber,
  quotationsCount,
  customerCategory,
  mode = "view",
  customerId,
  services,
}: QuotationCardProps) => {
  console.log(services, "what");
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
    if (mode === "view") {
      router.push({
        pathname: "/quotations/view",
        query: { quotationId: id, status },
      });
    }
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
          <label className="text-xs text-gray-400">Validity</label>
          <label>{validity ? `${validity}` : "N/A"}</label>
        </div>
        <div className="w-1/2 flex-col flex">
          <label className="text-xs text-gray-400">Total Price</label>
          <label className="text-primary font-semibold">
            {price ? `Rs. ${price}` : "N/A"}
          </label>
        </div>
      </div>
      <div className="flex px-2 text-sm">
        <div className="w-1/2 flex-col flex">
          <label className="text-xs text-gray-400">Customer Category</label>
          <Link
            href={{
              pathname: "/quotations/update/customer-category",
              query: {
                quotationId: id,
                customerId: customerId,
                customerName: name,
                customerPhoneNumber: phoneNumber,
                category: customerCategory,
                quotationsCount: quotationsCount,
              },
            }}
          >
            <a>
              <label className="capitalize ">{customerCategory}</label>
            </a>
          </Link>
        </div>
        <div className="w-1/2 flex-col flex">
          <label className="text-xs text-gray-400">Transaction Count</label>
          <label>{quotationsCount}</label>
        </div>
        <div className="w-1/2 flex-col flex">
          <label className="text-xs text-gray-400">Phone Number</label>
          <label>{phoneNumber}</label>
        </div>
      </div>
      <div className="flex px-2 py-2 flex-col">
        <label className="text-xs text-gray-400">Notes</label>
        <label className="text-sm">{notes ? `${notes}` : "N/A"}</label>
      </div>
      {services?.length > 0 && <ServiceTags services={services} />}
    </div>
  );
};

export default QuotationCard;

import OrderCard from "@Components/Dashboard/User/OrderCard";
import QuotationCard from "@Components/Dashboard/User/QuotationCard";
import StatsCard from "@Components/StatsCard";
import Link from "next/link";
import { useEffect } from "react";

const UserDashboard = ({ getUserOverview, overview, user }) => {
  console.log(user);
  useEffect(() => {
    getUserOverview(user.id);
  }, [getUserOverview, user.id]);

  return (
    <div>
      <div className="w-full text-center font-medium text-lg uppercase border-b-4 border-primary">
        Dashboard
      </div>
      <div>
        <div className="lg:flex lg:space-x-6 mt-4 ">
          <StatsCard
            title="Total Quotations"
            value={overview?.quotationAndOrders?.customer?.quotations?.length}
            artCover="/images/Quotations_Stats_Card_Art.png"
          />
          <StatsCard
            title="Total Purchases"
            value={overview?.quotationAndOrders?.customer?.orders?.length}
            artCover="/images/Purchase_Stats_Card_Art.png"
          />
        </div>
        <div>
          <div
            id="header section of quotation"
            className="flex justify-between border-b-2 border-gray-600 pb-2 items-center"
          >
            <h5>Quotations History</h5>
            <Link href="/quotations/get-a-quote">
              <a className="p-1 bg-primary text-white rounded-md px-4">
                Create New
              </a>
            </Link>
          </div>
          <div>
            {overview?.quotationAndOrders?.customer?.quotations.map(
              (quotation) => {
                return (
                  <QuotationCard
                    key={quotation.id}
                    price={quotation.price}
                    notes={quotation.notes}
                    status={quotation.status}
                    date={quotation.createdAt}
                    count={quotation.count}
                    validity={quotation.validity}
                    id={quotation.id}
                  />
                );
              }
            )}
          </div>
        </div>
        <div>
          <div
            id="header section of purchase"
            className="flex justify-between border-b-2 border-gray-600 py-2 items-center"
          >
            <h5>Purchase History</h5>
          </div>
          <div>
            {overview?.quotationAndOrders?.customer?.orders.map((order) => {
              return (
                <OrderCard
                  key={order.id}
                  salePrice={order.salePrice}
                  quantity={order.quantity}
                  saleDate={order.saleDate}
                  id={order.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

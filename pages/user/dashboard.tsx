import OrderCard from "@Components/Dashboard/User/OrderCard";
import QuotationCard from "@Components/Dashboard/User/QuotationCard";
import LoadingAnimation from "@Components/LoadingAnimation";
import StatsCard from "@Components/StatsCard";
import { UserDashboardProps } from "@Store/users/types";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-toastify";

const UserDashboard = ({
  getUserOverview,
  overview,
  loading,
}: UserDashboardProps) => {
  const router = useRouter();
  const {
    query: { userId },
  } = router;

  useEffect(() => {
    if (router.isReady) {
      const fetchUserOverview = async () => {
        const response = await getUserOverview(+userId);
        if (!response.success) {
          toast.error(`${response.message}`);
        }
      };
      fetchUserOverview();
    }
  }, [userId, router.isReady]);
  if (loading) return <LoadingAnimation message="Loading, please wait..." />;
  return (
    <div>
      <div className="border-b-4 border-neutral-400  w-full">
        <h1 className="text-2xl text-center  tracking-widest uppercase ">
          DashBoard
        </h1>
      </div>
      <div>
        <div className="lg:flex lg:space-x-6 mt-4 py-2 ">
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
        <div className="py-10">
          <div className="flex justify-between border-b-2 border-gray-600 pb-2 items-center">
            <h5>Quotation History</h5>
            <Link href="/quotations/get-a-quote">
              <a className="p-1 bg-primary text-white rounded-md px-4">
                Create New
              </a>
            </Link>
          </div>
          {overview?.quotationAndOrders?.customer?.quotations.length < 1 ? (
            <div>No quotations created yet.</div>
          ) : (
            <div>
              {overview?.quotationAndOrders?.customer?.quotations
                .filter((q) => q.status !== "FOLLOWUP")
                .map((quotation) => {
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
                })}
            </div>
          )}
        </div>
        {overview?.quotationAndOrders?.customer?.orders.length < 1 ? (
          <div>No purchases from DBS Tyres yet.</div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default UserDashboard;

import DashboardItemCard from "@Components/Dashboard/Admin/DashboardItemCard";
import DashboardMenuItem from "@Components/Dashboard/Admin/DashboardMenuItem";
import { AdminDashboardProps } from "@Store/adminPanel/types";
import Link from "next/link";
import { useEffect } from "react";
import { toast } from "react-toastify";
{
  /* <Link href="/admin/downloads">
        <a>Click here</a>
      </Link> */
}
const AdminPanel = ({
  loading,
  getOverview,
  overview,
}: AdminDashboardProps) => {
  const startDate = "06/21/2022";
  const endDate = "06/21/2022";

  useEffect(() => {
    const fetchUserOverview = async () => {
      const response = await getOverview({ startDate, endDate });
      if (!response.success) {
        toast.error(`${response.message}`);
      }
    };
    fetchUserOverview();
  }, []);

  return (
    <div className="pb-4">
      <div className="border-b-4 border-neutral-400 pb-1 w-full">
        <h1 className="text-xl text-center  tracking-widest uppercase ">
          DashBoard
        </h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <DashboardItemCard title="Total Sales" value={overview?.ordersCount} />
        <DashboardItemCard title="Profits" value={overview?.profit} />
        <DashboardItemCard
          title="Pending Quotations"
          value={overview?.pendingQuotations}
        />
        <DashboardItemCard
          title="Received Quotations"
          value={overview?.receivedQuotations}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <DashboardMenuItem
          title="Brand"
          artCover="/images/Brand_Menu_Card_Art.png"
          color="red-100"
        />
        <DashboardMenuItem title="Patterns" color="pink-100" />
        <DashboardMenuItem title="Tyre Size" />
        <DashboardMenuItem title="Product Line" />
      </div>
    </div>
  );
};

export default AdminPanel;

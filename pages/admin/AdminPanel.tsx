import {
  ClockCircleOutlined,
  EditOutlined,
  RiseOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import DashboardItemCard from "@Components/Dashboard/Admin/DashboardItemCard";
import DashboardMenuItem from "@Components/Dashboard/Admin/DashboardMenuItem";
import LoadingAnimation from "@Components/LoadingAnimation";
import { AdminDashboardProps } from "@Store/adminPanel/types";
import Link from "next/link";
import { useEffect } from "react";
import { toast } from "react-toastify";

const AdminPanel = ({
  loading,
  getOverview,
  overview,
}: AdminDashboardProps) => {
  const startDate = String(new Date());
  const endDate = String(new Date());

  useEffect(() => {
    const fetchUserOverview = async () => {
      const response = await getOverview({ startDate, endDate });
      if (!response.success) {
        toast.error(`${response.message}`);
      }
    };
    fetchUserOverview();
  }, []);
  if (loading) return <LoadingAnimation message="Please wait..." />;
  return (
    <div className="pb-4">
      <div className="border-b-4 border-neutral-400  w-full">
        <h1 className="text-2xl text-center  tracking-widest uppercase ">
          DashBoard
        </h1>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4 pt-4 ">
        <DashboardItemCard
          title="Today's Sales"
          value={overview?.totalSales}
          icon={<SwapOutlined />}
          increasePercentage={overview?.increaseInSale}
        />
        <DashboardItemCard
          title="Today's Profits"
          value={overview?.profit}
          icon={<RiseOutlined />}
          increasePercentage={overview?.increaseInProfits}
        />
        <DashboardItemCard
          title="Pending Quotations"
          value={overview?.pendingQuotations}
          icon={<ClockCircleOutlined />}
          increasePercentage={overview?.increaseInPendingQuotations}
        />
        <DashboardItemCard
          title="Received Quotations"
          value={overview?.receivedQuotations}
          icon={<EditOutlined />}
          increasePercentage={overview?.increaseInQuotationReceived}
        />
      </div>

      <div className="grid grid-cols-2 gap-2 my-8">
        <DashboardMenuItem
          title="Brand"
          color="bg-zinc-200"
          address="/admin/brand"
        />

        <DashboardMenuItem
          title="Patterns"
          color="bg-zinc-200"
          address="/admin/pattern"
        />
        <DashboardMenuItem
          title="Tyre Size"
          color="bg-zinc-200"
          address="/admin/tyre-size"
        />
        <DashboardMenuItem
          title="Speed Rating"
          color="bg-zinc-200"
          address="/admin/speed-rating"
        />
        <DashboardMenuItem
          title="Load Index"
          color="bg-zinc-200"
          address="/admin/load-index"
        />
        <DashboardMenuItem
          title="Product Line"
          color="bg-zinc-200"
          address="/admin/product-line"
        />
        <DashboardMenuItem
          title="Vendor"
          color="bg-zinc-200"
          address="/admin/vendor"
        />
        <DashboardMenuItem
          title="Location"
          color="bg-zinc-200"
          address="/admin/location"
        />
        <DashboardMenuItem
          title="Transport"
          color="bg-zinc-200"
          address="/admin/transport"
        />
        <DashboardMenuItem
          title="Service"
          color="bg-zinc-200"
          address="/admin/service"
        />
        <DashboardMenuItem
          title="Customer Category"
          color="bg-zinc-200"
          address="/admin/customer-category"
        />
        <DashboardMenuItem
          title="Declined Quotations"
          color="bg-zinc-200"
          address="/quotations/declined"
        />
        <DashboardMenuItem
          title="Vehicle Brand"
          color="bg-zinc-200"
          address="/admin/vehicle-brand"
        />
      </div>
      <div className="py-4">
        <Link href="/admin/downloads">
          <a className="text-base p-2 bg-primary text-white rounded-md ">
            Download Center
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AdminPanel;

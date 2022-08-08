import DownloadSection from "@Components/Dashboard/Admin/DownloadSection";

const Downloads = () => {
  return (
    <div className="pb-4">
      <div className="flex items-center justify-center">
        <img
          className="object-contain  rounded-xl"
          src="/images/Admin_Panel.png"
        />
      </div>
      <div className="mt-2">
        <h1 className="font-bold text-2xl pb-4">Download Center</h1>
      </div>
      <div className="space-y-4">
        <DownloadSection
          title="Stocks"
          requireDate={true}
          urlAddress="stocks"
        />
        <DownloadSection
          title="Orders"
          requireDate={true}
          urlAddress="orders"
        />
        <DownloadSection title="Users" requireDate={true} urlAddress="users" />
        <DownloadSection
          title="Customers"
          requireDate={true}
          urlAddress="customers"
        />
        <DownloadSection
          title="Quotations"
          requireDate={true}
          urlAddress="quotations"
        />
        <DownloadSection
          title="User Quotes"
          requireDate={true}
          urlAddress="user-quote"
        />
        <div className="pt-4 px-2 uppercase">System Data</div>
        <DownloadSection
          title="Brands"
          requireDate={false}
          urlAddress="brand"
        />
        <DownloadSection
          title="Patterns"
          requireDate={false}
          urlAddress="pattern"
        />
        <DownloadSection
          title="Tyre Size"
          requireDate={false}
          urlAddress="tyre-size"
        />
        <DownloadSection
          title="Tyre Details"
          requireDate={false}
          urlAddress="tyre-detail"
        />
        <DownloadSection
          title="Product Line"
          requireDate={false}
          urlAddress="product-line"
        />
        <DownloadSection
          title="Speed Rating"
          requireDate={false}
          urlAddress="speed-rating"
        />
        <DownloadSection
          title="Load Index"
          requireDate={false}
          urlAddress="load-index"
        />
        <DownloadSection
          title="Locations"
          requireDate={false}
          urlAddress="location"
        />
        <DownloadSection
          title="Transport Modes"
          requireDate={false}
          urlAddress="transport"
        />
        <DownloadSection
          title="Vendors"
          requireDate={false}
          urlAddress="vendor"
        />
        <DownloadSection
          title="Customer Categories"
          requireDate={false}
          urlAddress="customer-category"
        />
        <DownloadSection
          title="Services"
          requireDate={false}
          urlAddress="services"
        />
        <DownloadSection
          title="Vehicle Brands"
          requireDate={false}
          urlAddress="vehicle-brand"
        />
        <DownloadSection
          title="Vehicle Models"
          requireDate={false}
          urlAddress="vehicle-model"
        />
      </div>
    </div>
  );
};

export default Downloads;

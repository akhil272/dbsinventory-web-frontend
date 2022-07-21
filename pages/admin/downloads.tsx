import DateRangePicker from "@Components/DateRangePicker";
import fetchDownloadAsync from "@Store/api/fetchDownload";
import { useState } from "react";
import { toast } from "react-toastify";

const Downloads = () => {
  const [stocksDate, setStocksDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [ordersDate, setOrdersDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [usersDate, setUsersDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const handleExportStocks = async () => {
    const { startDate, endDate } = stocksDate;
    const url = `/stocks/csv?startDate=${startDate}&endDate=${endDate}`;
    const response = await fetchDownloadAsync({
      url,
      fileType: "stocks.csv",
      contentType: "text/csv",
    });
    if (response.success) {
      return toast.info("Success.");
    }
    toast.error("Failed to download.");
  };
  const handleExportOrders = async () => {
    const { startDate, endDate } = ordersDate;
    const url = `/orders/csv?startDate=${startDate}&endDate=${endDate}`;
    const response = await fetchDownloadAsync({
      url,
      fileType: "orders.csv",
      contentType: "text/csv",
    });
    if (response.success) {
      return toast.info("Success.");
    }
    toast.error("Failed to download.");
  };

  const handleExportUsers = async () => {
    const { startDate, endDate } = usersDate;
    const url = `/users/csv?startDate=${startDate}&endDate=${endDate}`;
    const response = await fetchDownloadAsync({
      url,
      fileType: "users.csv",
      contentType: "text/csv",
    });
    if (response.success) {
      return toast.success("File downloaded");
    }
    toast.error("Failed to download");
  };
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
        <div className="w-full ">
          <div className="bg-white p-2 rounded-md relative ">
            <div className="absolute top-0 right-0">
              <button
                onClick={handleExportStocks}
                className="p-2 bg-primary rounded-tr-md rounded-bl-md text-white font-normal"
              >
                Download
              </button>
            </div>
            <div className="font-medium text-xl my-2">Stocks</div>
            <label className="text-sm text-gray-400">Select Date Range</label>
            <div>
              <DateRangePicker setDates={setStocksDates} />
            </div>
          </div>
        </div>
        <div className="w-full ">
          <div className="bg-white p-2 rounded-md relative ">
            <div className="absolute top-0 right-0">
              <button
                onClick={handleExportOrders}
                className="p-2 bg-primary rounded-tr-md rounded-bl-md text-white font-normal"
              >
                Download
              </button>
            </div>
            <div className="font-medium text-xl my-2">Orders</div>
            <label className="text-sm text-gray-400">Select Date Range</label>
            <div>
              <DateRangePicker setDates={setOrdersDates} />
            </div>
          </div>
        </div>
        <div className="w-full ">
          <div className="bg-white p-2 rounded-md relative ">
            <div className="absolute top-0 right-0">
              <button
                onClick={handleExportUsers}
                className="p-2 bg-primary rounded-tr-md rounded-bl-md text-white font-normal"
              >
                Download
              </button>
            </div>
            <div className="font-medium text-xl my-2">Users</div>
            <label className="text-sm text-gray-400">Select Date Range</label>
            <div>
              <DateRangePicker setDates={setUsersDates} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;

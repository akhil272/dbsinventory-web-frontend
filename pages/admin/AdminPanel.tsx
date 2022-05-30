import DateRangePicker from "@Components/DateRangePicker";
import dbsServer from "@Pages/api/dbsServer";
import axios from "axios";
import { addDays } from "date-fns";
import moment from "moment";
import { useState } from "react";
interface DateData {
  startDate?: Date;
  endDate?: Date;
  key?: string;
}
const AdminPanel = () => {
  const [state, setState] = useState<DateData[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const handleExportStocks = async () => {
    const { data } = await dbsServer.post(
      "/stocks/export",
      {
        start_date: "05/29/2022",
        end_date: "05/29/2022",
      },
      { responseType: "blob" }
    );
    const blob = new Blob([data], { type: "text/csv" });
    const url = window.URL.createObjectURL(data);
    const link = document.createElement("a");
    link.href = url;
    link.download = "stocks.csv";
    link.click();
  };
  const handleExportOrders = async () => {
    const { data } = await dbsServer.post(
      "/orders/export",
      {
        start_date: `${String(moment(state[0]?.startDate).format("L"))}`,
        end_date: `${String(moment(state[0]?.endDate).format("L"))}`,
      },
      { responseType: "blob" }
    );
    const blob = new Blob([data], { type: "text/csv" });
    const url = window.URL.createObjectURL(data);
    const link = document.createElement("a");
    link.href = url;
    link.download = "orders.csv";
    link.click();
  };
  return (
    <div className="py-10 flex justify-center ">
      <div className="w-full">
        <div className="flex justify-center items-center">
          <img
            className="object-contain my-4 rounded-xl"
            src="/images/Admin_Panel.png"
          />
        </div>
        <div className="mt-2">
          <h1 className="font-bold text-2xl pb-4">Admin Panel</h1>
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
                <DateRangePicker state={state} setState={setState} />
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
                <DateRangePicker state={state} setState={setState} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
import DateRangePicker from "@Components/DateRangePicker";
import fetchDownloadAsync from "@Store/api/fetchDownload";
import moment from "moment";
import { useState } from "react";
import { toast } from "react-toastify";

interface DownloadSectionProps {
  title: string;
  requireDate: boolean;
  urlAddress: string;
}

const DownloadSection = ({
  title,
  requireDate,
  urlAddress,
}: DownloadSectionProps) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [dates, setDates] = useState({
    startDate: moment(new Date()).subtract(7, "days").format("L"),
    endDate: moment(new Date()).format("L"),
  });
  const getCSV = async () => {
    setIsDownloading(true);
    const { startDate, endDate } = dates;
    const url = requireDate
      ? `/${urlAddress}/csv?startDate=${startDate}&endDate=${endDate}`
      : `/${urlAddress}/csv`;

    const response = await fetchDownloadAsync({
      url,
      fileType: `${title}`,
      contentType: "text/csv",
    });
    if (response.success) {
      setIsDownloading(false);
      return toast.success("Success.");
    }
    toast.error("Failed to download.");
  };

  return (
    <div className="w-full ">
      <div className="bg-white p-2 rounded-md relative ">
        <div className="absolute top-0 right-0">
          <button
            onClick={getCSV}
            className="p-2 bg-primary rounded-tr-md rounded-bl-md text-white font-normal"
          >
            {isDownloading ? "Processing" : "Download"}
          </button>
        </div>
        <div className="font-medium text-xl my-2">{title}</div>
        {requireDate && (
          <>
            <label className="text-sm text-gray-400">Select Date Range</label>
            <div>
              <DateRangePicker setDates={setDates} />
            </div>
          </>
        )}
        {!requireDate && (
          <label className="text-sm text-gray-400">
            Download all {title} in the system.
          </label>
        )}
      </div>
    </div>
  );
};

export default DownloadSection;

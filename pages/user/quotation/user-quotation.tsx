import Button from "@Components/Button";
import QuotationCard from "@Components/Dashboard/User/QuotationCard";
import LoadingAnimation from "@Components/LoadingAnimation";
import QuoteListCard from "@Components/QuoteListCard";
import fetchDownloadAsync from "@Store/api/fetchDownload";
import { UserQuotationProps } from "@Store/quotations/types";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
const UserQuotation = ({
  loading,
  getQuotationById,
  updateQuotationById,
  quotation,
}: UserQuotationProps) => {
  const [downloadProcessing, setDownloadProcessing] = useState(false);
  const router = useRouter();
  const {
    query: { quotationId },
  } = router;
  const id = Number(quotationId);
  const onAccept = async () => {
    const status = "ACCEPTED";
    const response = await updateQuotationById({ id, status });
    if (response.success)
      toast.success("Quotation accepted."), getQuotationById({ id });
    if (!response.success) toast.error("Please try again.");
  };
  const onDecline = async () => {
    const status = "DECLINED";
    const response = await updateQuotationById({ id, status });
    if (response.success) toast.success("Quotation declined."), router.back();
    if (!response.success) toast.error("Please try again.");
  };

  const onDownload = async () => {
    setDownloadProcessing(true);
    const url = `/manage-quotations/download/pdf/${id}`;
    const response = await fetchDownloadAsync({
      url,
      fileType: `DBS_Quotation#${id}.pdf`,
      contentType: "text/pdf",
    });
    if (response.success) {
      setDownloadProcessing(false);
      return toast.success("Success.");
    }
    toast.error("Failed to download.");
  };

  useEffect(() => {
    if (router.isReady) {
      const fetchQuotation = async () => {
        const response = await getQuotationById({ id });
        if (!response.success) {
          return toast.error(`${response.message}`);
        }
      };
      fetchQuotation();
    }
  }, [getQuotationById, router.isReady]);

  if (loading) {
    return <LoadingAnimation message="Loading quotation. Please wait..." />;
  }
  return (
    <div className="pb-4">
      <QuotationCard
        key={quotation?.id}
        price={quotation?.price}
        notes={quotation?.notes}
        status={quotation?.status}
        date={quotation?.createdAt}
        count={quotation?.count}
        validity={quotation?.validity}
        id={quotation?.id}
      />
      {quotation?.status === "WAITING" && (
        <div className="flex space-x-2 mb-4">
          <Button bgColor="bg-pastel_green" width="w-1/3" onClick={onAccept}>
            Accept
          </Button>
          <Button width="w-1/3" onClick={onDecline}>
            Decline
          </Button>
          <Button bgColor="bg-gray-400" width="w-1/3" onClick={onDownload}>
            {downloadProcessing ? "Processing" : "Download"}
          </Button>
        </div>
      )}

      {quotation?.status === "ACCEPTED" && (
        <div className="mb-4">
          <Button onClick={onDownload}>
            {downloadProcessing ? "Processing" : "Download"}
          </Button>
        </div>
      )}

      {quotation?.status === "PENDING" && (
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            We are processing this request. Once quotation is ready we will
            notify you.
          </p>
        </div>
      )}

      {quotation?.userQuotes.map((quote) => (
        <div key={quote.id}>
          <QuoteListCard
            vehicleBrand={quote?.vehicleBrand ?? "Error please refresh"}
            vehicleModel={quote?.vehicleModel ?? "Error please refresh"}
            index={quote.id}
            key={quote?.id}
            brand={quote?.brandName ?? "Error please refresh"}
            pattern={quote?.patternName ?? "-"}
            tyreSize={quote?.tyreSizeValue ?? "Error please refresh"}
            loadIndex={quote?.tyreLoadIndex ?? "-"}
            speedRating={quote?.tyreSpeedRating ?? "-"}
            notes={quote.userNotes}
            quantity={quote.quantity}
            id={quote?.id}
            price={quote?.quotePrice}
          />
        </div>
      ))}
      <div className="flex items-end justify-end ">
        <a className="font-bold text-primary" href="tel:+919446821132">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default UserQuotation;

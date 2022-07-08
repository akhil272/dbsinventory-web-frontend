import Button from "@Components/Button";
import QuotationCard from "@Components/Dashboard/User/QuotationCard";
import LoadingAnimation from "@Components/LoadingAnimation";
import QuoteListCard from "@Components/QuoteListCard";
import { UserQuotationProps } from "@Store/quotations/types";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

const UserQuotation = ({
  loading,
  getQuotationById,
  updateQuotationById,
  quotation,
}: UserQuotationProps) => {
  const router = useRouter();
  const {
    query: { quotationId },
  } = router;
  const id = Number(quotationId);

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

  const onDownload = () => {
    alert("Download");
  };

  if (loading) {
    return <LoadingAnimation message="Loading quotation. Please wait..." />;
  }
  return (
    <div className=" pb-4">
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
        <div className="flex space-x-2">
          <Button bgColor="bg-pastel_green" width="w-1/2" onClick={onAccept}>
            Accept
          </Button>
          <Button width="w-1/2" onClick={onDecline}>
            Decline
          </Button>
        </div>
      )}

      {quotation?.status === "ACCEPTED" && (
        <div className="mb-4">
          <Button onClick={onDownload}>Download</Button>
        </div>
      )}

      {quotation?.userQuotes.map((quote) => (
        <div key={quote.id}>
          <QuoteListCard
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
    </div>
  );
};

export default UserQuotation;

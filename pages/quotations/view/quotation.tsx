import LoadingAnimation from "@Components/LoadingAnimation";
import QuotationCard from "@Components/QuotationCard";
import QuoteListCard from "@Components/QuoteListCard";
import { ViewQuotationProps } from "@Store/quotations/types";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Quotation = ({
  loading,
  getQuotationById,
  quotation,
}: ViewQuotationProps) => {
  const router = useRouter();
  const {
    query: { quotationId, status },
  } = router;
  const id = Number(quotationId);

  useEffect(() => {
    if (router.isReady) {
      getQuotationById({ id });
    }
  }, [getQuotationById, router.isReady]);

  if (loading) {
    return <LoadingAnimation message="Loading orders. Please wait.." />;
  }

  return (
    <div className=" pb-4">
      <QuotationCard
        id={quotation?.id}
        count={quotation?.count}
        date={quotation?.createdAt}
        notes={quotation?.notes}
        price={quotation?.price}
        status={quotation?.status}
        validity={quotation?.validity}
        name={`${quotation?.customer.user.firstName} ${quotation?.customer.user.lastName}`}
        quotationsCount={quotation?.customer.quotationsCount}
        phoneNumber={quotation?.customer.user.phoneNumber}
        customerCategory={quotation?.customer.customerCategory.name}
        mode="update"
        customerId={quotation?.customer.id}
        services={quotation?.quotationServices}
      />
      {status === "PENDING" && (
        <div className="w-full bg-primary rounded-md text-white font-semibold p-2 text-center mb-4">
          <Link
            href={{
              pathname: "/quotations/update",
              query: { quotationId: quotation?.id },
            }}
          >
            <a>Finalize Quotation</a>
          </Link>
        </div>
      )}

      {status === "WAITING" && (
        <div className="flex space-x-2">
          <div className="bg-pastel_green w-1/2 rounded-md text-white font-semibold p-2 text-center mb-4">
            <Link
              href={{
                pathname: "/quotations/update/status",
                query: {
                  quotationId: quotation?.id,
                  status: status,
                  customerName: quotation?.customer.user.firstName,
                  customerPhoneNumber: quotation?.customer.user.phoneNumber,
                },
              }}
            >
              <a>Update Status</a>
            </Link>
          </div>
          <div className="bg-red-500 w-1/2 rounded-md text-white font-semibold p-2 text-center mb-4">
            Expiries on {""}
            {moment(quotation?.createdAt)
              .add(quotation?.validity, "days")
              .format("MMM Do ")}
          </div>
        </div>
      )}

      {status === "FOLLOWUP" && (
        <div className="flex space-x-2">
          <div className="bg-pastel_green w-1/2 rounded-md text-white font-semibold p-2 text-center mb-4">
            <Link
              href={{
                pathname: "/quotations/update/status",
                query: {
                  quotationId: quotation?.id,
                  status: status,
                  customerName: quotation?.customer.user.firstName,
                  customerPhoneNumber: quotation?.customer.user.phoneNumber,
                },
              }}
            >
              <a>Update Status</a>
            </Link>
          </div>
          <div className="bg-red-500 w-1/2 rounded-md text-white font-semibold p-2 text-center mb-4">
            <Link
              href={{
                pathname: "/quotations/update",
                query: { quotationId: quotation?.id },
              }}
            >
              <a>Resend</a>
            </Link>
          </div>
        </div>
      )}

      {quotation?.userQuotes.map((quote) => (
        <div key={quote.id}>
          <Link
            href={{
              pathname: "/quotations/user-quote",
              query: { userQuoteId: quote.id, quotationId: quotation.id },
            }}
          >
            <a>
              <QuoteListCard
                key={quote?.id}
                brand={quote?.brandName ?? "Error please refresh"}
                pattern={quote?.patternName ?? "-"}
                tyreSize={quote?.tyreSizeValue ?? "Error please refresh"}
                loadIndex={quote?.tyreLoadIndex ?? "-"}
                speedRating={quote?.tyreSpeedRating ?? "-"}
                notes={quote.userNotes}
                quantity={quote.quantity}
                id={quote?.id}
                adminComments={quote?.adminComments}
                price={quote?.quotePrice}
                type="advanced"
              />
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Quotation;

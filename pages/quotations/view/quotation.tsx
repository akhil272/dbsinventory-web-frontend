import LoadingAnimation from "@Components/LoadingAnimation";
import QuotationCard from "@Components/QuotationCard";
import QuoteListCard from "@Components/QuoteListCard";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Quotation = ({ loading, getQuotationById, quotation }) => {
  const router = useRouter();
  const {
    query: { quotationId },
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
    <div className="pt-10 pb-4">
      <QuotationCard
        id={quotation?.id}
        count={quotation?.count}
        date={quotation?.date}
        notes={quotation?.notes}
        price={quotation?.price}
        status={quotation?.status}
        validity={quotation?.validity}
        name={`${quotation?.user.firstName} ${quotation?.user.lastName}`}
      />
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
                brand={quote?.brand ?? "Error please refresh"}
                pattern={quote?.pattern ?? "-"}
                tyreSize={quote?.tyreSize ?? "Error please refresh"}
                loadIndex={quote?.loadIndex ?? "-"}
                speedRating={quote?.speedRating ?? "-"}
                notes={quote.notes}
                quantity={quote.quantity}
                id={quote?.id}
                adminComments={quote?.adminComments}
                price={quote?.price}
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

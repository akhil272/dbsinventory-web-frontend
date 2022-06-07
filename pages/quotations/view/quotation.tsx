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
  console.log(quotation, "hello");
  return (
    <div className="pt-20">
      <QuotationCard
        id={quotation?.id}
        count={quotation?.count}
        date={quotation?.date}
        notes={quotation?.notes}
        price={quotation?.price}
        status={quotation?.status}
        name="anand"
      />

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
                tyreSize={quote?.tyre_size ?? "Error please refresh"}
                load_index={quote?.load_index ?? "-"}
                speed_rating={quote?.speed_rating ?? "-"}
                notes={quote.notes}
                quantity={quote.quantity}
                id={quote?.id}
              />
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Quotation;

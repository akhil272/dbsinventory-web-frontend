import LoadingAnimation from "@Components/LoadingAnimation";
import QuoteListCard from "@Components/QuoteListCard";
import { getQuotationById } from "@Store/quotations/actions";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import quotation from "../view/quotation";

const UserQuote = ({ quotation, getQuotationById, loading }) => {
  const router = useRouter();
  const {
    query: { userQuoteId, quotationId },
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
  console.log(userQuoteId, "userQuoteId", quotationId, "quotationId");
  return (
    <div>
      UserQuote
      <div>Add price</div>
      <div>Add Notes</div>
      {quotation?.userQuotes
        .filter((userQuotations) => userQuotations.id === Number(userQuoteId))
        .map((quote) => (
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
        ))}
    </div>
  );
};

export default UserQuote;

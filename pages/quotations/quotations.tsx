import FilterCard from "@Components/FilterCard";
import LoadingAnimation from "@Components/LoadingAnimation";
import NotFound from "@Components/NotFound";
import QuotationCard from "@Components/QuotationCard";
import { QuotationProps } from "@Store/quotations/types";
import React, { useEffect, useState } from "react";

const Quotations = ({
  quotations,
  getQuotations,
  loading,
  total,
  lastPage,
  page: metaPage,
}: QuotationProps) => {
  const [page, setPage] = useState<number>(1);
  const [quotationStatus, setQuotationStatus] = useState<string>("PENDING");
  const [sortBy, setSortBy] = useState("ASC");
  const [take, setTake] = useState<number>(25);
  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };
  useEffect(() => {
    getQuotations({
      status: quotationStatus,
      take: String(take),
      page: String(page),
      sortBy,
    });
  }, [getQuotations, page, quotationStatus, sortBy]);
  if (loading) {
    return <LoadingAnimation message="Loading stocks. Please wait.." />;
  }

  return (
    <div>
      <div className="grid grid-cols-2  font-bold text-white text-md gap-1">
        <button
          className="p-4 rounded-md bg-pending "
          onClick={() => setQuotationStatus("PENDING")}
        >
          Pending
        </button>
        <button
          className="p-4 rounded-md bg-waiting"
          onClick={() => setQuotationStatus("WAITING")}
        >
          Waiting
        </button>

        <button
          className="p-4 rounded-md bg-followup"
          onClick={() => setQuotationStatus("FOLLOWUP")}
        >
          Follow Up
        </button>
        <button
          className="p-4 rounded-md bg-accepted"
          onClick={() => setQuotationStatus("ACCEPTED")}
        >
          Accepted
        </button>
      </div>
      <FilterCard sortBy={sortBy} setSortBy={setSortBy} />
      <div>
        {quotations?.map((quotation) => (
          <QuotationCard
            id={quotation.id}
            status={quotation.status}
            key={quotation.id}
            name={`${quotation.user.firstName} ${quotation.user.lastName}`}
            price={quotation.price}
            notes={quotation.notes}
            date={quotation.createdAt}
            count={quotation.count}
            validity={quotation.validity}
          />
        ))}
      </div>
      <div className="flex place-items-center w-full pt-4 text-md justify-between">
        <button
          disabled={metaPage <= 1 ? true : false}
          className={metaPage <= 1 ? " text-stone-400 py-2" : " py-2"}
          onClick={previousPage}
        >
          Previous
        </button>
        {page >= 2 && (
          <button
            disabled={metaPage <= 1 ? true : false}
            onClick={previousPage}
            className="text-sm text-gray-400"
          >
            {page - 1}
          </button>
        )}
        <div className="text-md py-1 font-bold px-3 text-white rounded-md bg-secondary">
          {page}
        </div>
        {page <= lastPage && (
          <button
            disabled={metaPage >= lastPage ? true : false}
            onClick={nextPage}
            className="text-sm text-gray-400"
          >
            {page + 1}
          </button>
        )}

        <button
          disabled={metaPage >= lastPage ? true : false}
          className={metaPage >= lastPage ? " text-stone-400  py-2" : "  py-2"}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
      <div className="flex justify-between text-sm pb-2 text-gray-400">
        <div>Total Results : {total}</div>
        Page : {metaPage} of {lastPage} pages
      </div>
    </div>
  );
};

export default Quotations;

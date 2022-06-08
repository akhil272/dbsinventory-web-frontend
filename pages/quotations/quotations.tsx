import LoadingAnimation from "@Components/LoadingAnimation";
import QuotationCard from "@Components/QuotationCard";
import React, { useEffect, useState } from "react";

const Quotations = ({
  quotations,
  getQuotations,
  loading,
  total,
  last_page,
  page: metaPage,
}) => {
  const [page, setPage] = useState<number>(1);
  const [quotationStatus, setQuotationStatus] = useState<string>("PENDING");

  const take = 10;
  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };
  useEffect(() => {
    getQuotations({ search: `&take=${take}&page=${page}` });
  }, [getQuotations, page]);
  if (loading) {
    return <LoadingAnimation message="Loading stocks. Please wait.." />;
  }
  console.log(quotations, "what do we have here");
  return (
    <div>
      <div className="pt-16 grid grid-cols-2  font-bold text-white text-md gap-1">
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
      <div>
        {quotations
          ?.filter(({ status }) => status === `${quotationStatus}`)
          .map((quotation) => (
            <QuotationCard
              id={quotation.id}
              status={quotation.status}
              key={quotation.id}
              name={`${quotation.user.first_name} ${quotation.user.last_name}`}
              price={quotation.price ? `${quotation.price}` : "N/A"}
              notes={quotation.notes ? `${quotation.notes}` : "N/A"}
              date={quotation.created_at}
              count={quotation.count}
              validity={quotation.validity ? `${quotation.validity}` : "N/A"}
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
        {page <= last_page && (
          <button
            disabled={metaPage >= last_page ? true : false}
            onClick={nextPage}
            className="text-sm text-gray-400"
          >
            {page + 1}
          </button>
        )}

        <button
          disabled={metaPage >= last_page ? true : false}
          className={metaPage >= last_page ? " text-stone-400  py-2" : "  py-2"}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
      <div className="flex justify-between text-sm pb-2 text-gray-400">
        <div>Total Results : {total}</div>
        Page : {metaPage} of {last_page} pages
      </div>
    </div>
  );
};

export default Quotations;

import LoadingAnimation from "@Components/LoadingAnimation";
import NotFound from "@Components/NotFound";
import QuotationCard from "@Components/QuotationCard";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const DeclinedQuotations = ({
  quotations,
  total,
  page: metaPage,
  lastPage,
  loading,
  getQuotations,
}) => {
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState("ASC");
  const [take, setTake] = useState<number>(10);
  const [found, setFound] = useState<boolean>(true);
  useEffect(() => {
    const fetchQuotations = async () => {
      const response = await getQuotations({
        status: "DECLINED",
        take: String(take),
        page: String(page),
        sortBy,
      });
      if (!response.success) {
        toast.error(`${response.message}`);
        setFound(false);
      }
    };
    fetchQuotations();
  }, [getQuotations, page, sortBy]);
  if (loading) {
    return <LoadingAnimation message="Loading quotations. Please wait.." />;
  }
  if (!found) {
    return (
      <div onClick={() => console.log("Hello")}>
        <NotFound message="Oops no quotations to list on selected filters.">
          <button className="bg-primary text-center hover:bg-red-500 text-white  py-1 w-full rounded">
            Go back
          </button>
        </NotFound>
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-between pb-2 border-b-2 border-gray-500 mb-2">
        <h1 className="text-xl font-semibold w-full">Declined Quotations</h1>
      </div>
      <div>
        {quotations?.map((quotation) => (
          <QuotationCard
            id={quotation.id}
            status={quotation.status}
            key={quotation.id}
            name={`${quotation.customer.user.firstName} ${quotation.customer.user.lastName} `}
            price={quotation.price}
            notes={quotation.notes}
            date={quotation.createdAt}
            count={quotation.count}
            validity={quotation.validity}
            phoneNumber={quotation.customer.user.phoneNumber}
            quotationsCount={quotation.customer.quotationsCount}
            customerCategory={quotation.customer.customerCategory.name}
            services={quotation?.quotationServices}
            deletedAt={quotation.customer.user.deletedAt}
          />
        ))}
      </div>
    </div>
  );
};

export default DeclinedQuotations;

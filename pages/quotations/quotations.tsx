import FilterCard from "@Components/FilterCard";
import LoadingAnimation from "@Components/LoadingAnimation";
import NotFound from "@Components/NotFound";
import QuotationCard from "@Components/QuotationCard";
import { QuotationProps } from "@Store/quotations/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
const Quotations = ({
  quotations,
  getQuotations,
  loading,
  total,
  lastPage,
  page: metaPage,
  customerCategories,
  getCustomerCategories,
}: QuotationProps) => {
  const [page, setPage] = useState<number>(1);
  const [searchByPhoneNumber, setSearchByPhoneNumber] = useState<string>("");
  const [customerCategory, setCustomerCategory] = useState(null);
  const [quotationStatus, setQuotationStatus] = useState<string>("PENDING");
  const [sortBy, setSortBy] = useState("ASC");
  const [take, setTake] = useState<number>(10);
  const [found, setFound] = useState<boolean>(true);
  const nextPage = () => {
    setPage(page + 1);
    1;
  };

  const previousPage = () => {
    setPage(page - 1);
  };
  const onCustomerCategoryChange = (label: string) => {
    setCustomerCategory(label);
  };
  useEffect(() => {
    getCustomerCategories({ search: "" });
  }, [getCustomerCategories]);

  useEffect(() => {
    const fetchQuotations = async () => {
      const response = await getQuotations({
        status: quotationStatus,
        take: String(take),
        page: String(page),
        sortBy,
        search: searchByPhoneNumber,
        customerCategory: customerCategory,
      });
      if (!response.success) {
        toast.error(`${response.message}`);
        setFound(false);
      }
    };
    fetchQuotations();
  }, [
    getQuotations,
    page,
    quotationStatus,
    sortBy,
    searchByPhoneNumber,
    customerCategory,
  ]);
  if (loading) {
    return <LoadingAnimation message="Loading quotations. Please wait.." />;
  }
  const handleReset = () => {
    setSearchByPhoneNumber("");
    setCustomerCategory(null);
    setQuotationStatus("PENDING");
    setSortBy("ASC");
    setFound(true);
  };
  if (!found) {
    return (
      <div onClick={handleReset}>
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
        <h1 className="text-xl font-semibold w-full">Quotations</h1>
        <Link href="/quotations/create">
          <a className="px-6 py-1 bg-primary text-sm text-center flex items-center rounded-md text-white">
            Create
          </a>
        </Link>
      </div>

      <div className="grid grid-cols-2  font-bold text-white text-base gap-2 py-4">
        <button
          className={`p-4 rounded-md  ${
            quotationStatus === "PENDING"
              ? "bg-pending "
              : "border-2 border-pending text-pending "
          }`}
          onClick={() => setQuotationStatus("PENDING")}
        >
          Pending
        </button>
        <button
          className={`p-4 rounded-md  ${
            quotationStatus === "WAITING"
              ? "bg-waiting"
              : "border-2 border-waiting text-waiting "
          }`}
          onClick={() => setQuotationStatus("WAITING")}
        >
          Waiting
        </button>

        <button
          className={`p-4 rounded-md  ${
            quotationStatus === "FOLLOWUP"
              ? "bg-followup"
              : "border-2 border-followup text-followup "
          }`}
          onClick={() => setQuotationStatus("FOLLOWUP")}
        >
          Follow Up
        </button>
        <button
          className={`p-4 rounded-md  ${
            quotationStatus === "ACCEPTED"
              ? "bg-accepted"
              : "border-2 border-accepted text-accepted "
          }`}
          onClick={() => setQuotationStatus("ACCEPTED")}
        >
          Accepted
        </button>
      </div>
      <div className="py-2">
        <FilterCard
          sortBy={sortBy}
          setSortBy={setSortBy}
          setSearchByPhoneNumber={setSearchByPhoneNumber}
          customerCategories={customerCategories}
          onChange={onCustomerCategoryChange}
        />
      </div>

      <div>
        {quotations?.map((quotation) => (
          <QuotationCard
            id={quotation.id}
            status={quotation.status}
            key={quotation.id}
            name={`${quotation.customer.user.firstName} ${quotation.customer.user.lastName}`}
            price={quotation.price}
            notes={quotation.notes}
            date={quotation.createdAt}
            count={quotation.count}
            validity={quotation.validity}
            phoneNumber={quotation.customer.user.phoneNumber}
            quotationsCount={quotation.customer.quotationsCount}
            customerCategory={quotation.customer.customerCategory.name}
            services={quotation?.quotationServices}
          />
        ))}
      </div>
      <div className="flex place-items-center w-full pt-4 text-base justify-between">
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
        <div className="text-base py-1 font-bold px-3 text-white rounded-md bg-secondary">
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

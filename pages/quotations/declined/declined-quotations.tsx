import FilterCard from "@Components/FilterCard";
import LoadingAnimation from "@Components/LoadingAnimation";
import NotFound from "@Components/NotFound";
import QuotationCard from "@Components/QuotationCard";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const DeclinedQuotations = ({
  quotations,
  total,
  page: metaPage,
  lastPage,
  loading,
  getQuotations,
  getCustomerCategories,
  customerCategories,
}) => {
  const [page, setPage] = useState<number>(1);
  const [searchByPhoneNumber, setSearchByPhoneNumber] = useState<string>("");
  const [viewDeletedUsers, setViewDeletedUsers] = useState(false);
  const [customerCategory, setCustomerCategory] = useState(null);
  const [sortBy, setSortBy] = useState("DESC");
  const [take, setTake] = useState<number>(10);
  const [found, setFound] = useState<boolean>(true);
  const router = useRouter();
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
  const onViewDeletedUsers = () => {
    setViewDeletedUsers(!viewDeletedUsers);
  };

  useEffect(() => {
    const fetchQuotations = async () => {
      const response = await getQuotations({
        status: "DECLINED",
        take: String(take),
        page: String(page),
        sortBy,
        search: searchByPhoneNumber,
        customerCategory: customerCategory,
        isUserDeleted: viewDeletedUsers,
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
    sortBy,
    searchByPhoneNumber,
    customerCategory,
    viewDeletedUsers,
  ]);
  useEffect(() => {
    getCustomerCategories({ search: "" });
  }, [getCustomerCategories]);
  if (loading) {
    return <LoadingAnimation message="Loading quotations. Please wait.." />;
  }
  if (!found) {
    return (
      <div onClick={() => router.reload()}>
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
        <FilterCard
          sortBy={sortBy}
          setSortBy={setSortBy}
          setSearchByPhoneNumber={setSearchByPhoneNumber}
          customerCategories={customerCategories}
          onChange={onCustomerCategoryChange}
          onViewDeletedUsers={onViewDeletedUsers}
          viewDeletedUsers={viewDeletedUsers}
        />
      </div>
      <div>
        {quotations.map((quotation) => (
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

export default DeclinedQuotations;

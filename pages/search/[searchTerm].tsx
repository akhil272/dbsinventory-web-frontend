import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingAnimation from "../../components/LoadingAnimation";
import StockDetail from "../../components/StockDetail";
import { RootStore } from "../../store";
import { getStocksBySearch } from "../../store/actions/StockActions";

const StocksList = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { searchTerm } = router.query;

  const token = useSelector((state: RootStore) => state.auth.token);
  const isLoading = useSelector((state: RootStore) => state.stock.isLoading);
  const errorMessage = useSelector(
    (state: RootStore) => state.stock.errorMessage
  );
  const meta = useSelector((state: RootStore) => state.stock.stocksData?.meta);
  const stocks = useSelector(
    (state: RootStore) => state.stock.stocksData?.stocks
  );
  const [page, setPage] = useState<number>(1);

  const take = 10;
  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };
  useEffect(() => {
    dispatch(getStocksBySearch(String(searchTerm), token, page, take));
  }, [dispatch, page]);
  if (isLoading) {
    return (
      <LoadingAnimation message="Fetching stock data from database. Please wait..." />
    );
  }
  return (
    <div className="bg-zinc-100  py-10 lg:px-96">
      {stocks?.map((stock) => (
        <StockDetail
          key={stock.id}
          brand={stock.brand}
          vendor={stock.vendor}
          tyre_size={stock.tyre_size}
          pattern_name={stock.pattern_name}
          dom={stock.dom}
          product_line={stock.product_line}
          transport_mode={stock.transport_mode}
          purchase_date={stock.purchase_date}
          location={stock.location}
          quantity={stock.quantity}
          cost={stock.cost}
          stockId={stock.id}
        />
      ))}
      <div className="flex place-items-center w-full text-sm justify-between">
        <div>Total Results : {meta?.total}</div>
        <button
          disabled={Number(meta?.page) <= 1 ? true : false}
          className={
            Number(meta?.page) <= 1
              ? "bg-stone-300 text-stone-400 rounded-md w-24 p-2"
              : "bg-stone-300 rounded-md w-24 p-2"
          }
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          disabled={
            Number(meta?.page) >= Number(meta?.last_page) ? true : false
          }
          className={
            Number(meta?.page) >= Number(meta?.last_page)
              ? "bg-stone-300 text-stone-400 rounded-md w-24 p-2"
              : "bg-stone-300 rounded-md w-24 p-2"
          }
          onClick={nextPage}
        >
          Next
        </button>
        <div>
          Page : {meta?.page} of {meta?.last_page} pages
        </div>
      </div>
    </div>
  );
};

export default StocksList;
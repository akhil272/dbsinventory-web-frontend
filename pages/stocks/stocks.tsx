import StockDetail from "@Components/StockDetail";
import { StocksProps } from "@Store/stocks/types";
import React, { useEffect, useState } from "react";

const Stocks = ({ stocks, getStocks }: StocksProps) => {
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    getStocks({ search: "" });
  }, [getStocks]);
  console.log(stocks);
  const take = 10;
  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  return (
    <div className="bg-zinc-100 ">
      <div className="pt-16">
        {stocks?.map((stock) => (
          <StockDetail
            key={stock.id}
            // brand={stock.tyreDetail?.pattern?.name}
            vendor={stock.vendor?.name}
            tyre_size={stock.tyreDetail?.tyreSize.size}
            // pattern_name={stock.tyreDetail?.pattern.id}
            dom={stock.dom}
            product_line={stock.product_line}
            transport_mode={stock.transport.mode}
            purchase_date={stock.purchase_date}
            location={stock.location?.name}
            quantity={stock.quantity}
            cost={stock.cost}
            stockId={stock.id}
          />
        ))}
      </div>
      {/* <div className="flex place-items-center w-full text-sm justify-between">
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
      </div> */}
    </div>
  );
};

export default Stocks;

import LoadingAnimation from "@Components/LoadingAnimation";
import NotFound from "@Components/NotFound";
import StockCard from "@Components/StockCard";
import { StocksProps } from "@Store/stocks/types";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Stocks = ({
  stocks,
  getStocks,
  total,
  lastPage,
  page: metaPage,
  loading,
  user,
}: StocksProps) => {
  const [page, setPage] = useState<number>(1);
  const router = useRouter();
  const {
    query: { brand, tyreSize, searchTerm },
  } = router;
  const take = 10;
  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };
  useEffect(() => {
    if (router.isReady) {
      let url = `&take=${take}&page=${page}`;
      if (brand) {
        url = url + `&brand=${brand}`;
      }
      if (tyreSize) {
        url = url + `&size=${tyreSize}`;
      }
      if (searchTerm?.length > 1) {
        url = `=${searchTerm}` + url;
      }
      getStocks({
        search: url,
      });
    }
  }, [getStocks, page, router.isReady]);
  if (loading) {
    return <LoadingAnimation message="Loading stocks. Please wait.." />;
  }
  if (stocks?.length === 0) {
    return <NotFound message="No stocks found" />;
  }

  return (
    <div>
      <div className="pt-10">
        {stocks?.map((stock) => (
          <StockCard
            key={stock.id}
            brand={stock.tyreDetail.pattern.brand.name}
            vendor={stock.vendor.name}
            tyreSize={stock.tyreDetail.tyreSize.value}
            patternName={stock.tyreDetail.pattern.name}
            dom={stock.dom}
            productLine={stock.productLine.name}
            transportMode={stock.transport.mode}
            purchaseDate={stock.purchaseDate}
            location={stock.location.name}
            quantity={stock.quantity}
            cost={stock.cost}
            stockId={stock.id}
            role={user?.role}
            loadIndex={stock.loadIndex?.value}
            speedRating={stock.speedRating?.value}
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

export default Stocks;

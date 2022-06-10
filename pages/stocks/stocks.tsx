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
  last_page,
  page: metaPage,
  loading,
  user,
}: StocksProps) => {
  const [page, setPage] = useState<number>(1);
  const router = useRouter();
  const {
    query: { brand, tyreSize, searchTerm },
  } = router;
  console.log(brand, tyreSize, searchTerm, "all data");
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
            tyre_size={stock.tyreDetail.tyreSize.size}
            pattern_name={stock.tyreDetail.pattern.name}
            dom={stock.dom}
            product_line={stock.product_line}
            transport_mode={stock.transport.mode}
            purchase_date={stock.purchase_date}
            location={stock.location.name}
            quantity={stock.quantity}
            cost={stock.cost}
            stockId={stock.id}
            role={user.roles}
            load_index={stock.load_index?.load_index}
            speed_rating={stock.speed_rating?.speed_rating}
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

export default Stocks;

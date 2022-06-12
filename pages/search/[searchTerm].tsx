import LoadingAnimation from "@Components/LoadingAnimation";
import StockCard from "@Components/StockCard";
import stocks from "@Pages/stocks";
import { initialState } from "@Store/rootReducer";
import { getStocks } from "@Store/stocks/actions";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const mapStateToProps = ({ stocks, users }: typeof initialState) => ({
  stocks: stocks.stocks,
  total: stocks.total,
  page: stocks.page,
  lastPage: stocks.lastPage,
  loading: stocks.loading,
  user: users.user,
});

const mapDispatchToProps = () => ({
  getStocks,
});

const SearchResult = ({
  loading,
  user,
  stocks,
  total,
  page: metaPage,
  lastPage,
}) => {
  const router = useRouter();
  const { searchTerm } = router.query;

  const [page, setPage] = useState<number>(1);
  console.log("search term", searchTerm);
  const take = 10;
  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    if (router.isReady) {
      getStocks({ search: `${searchTerm}&take=${take}&page=${page}` });
    }
  }, [router.isReady, getStocks, page]);
  if (loading) {
    return <LoadingAnimation message="Loading stocks. Please wait.." />;
  }

  return (
    <div>
      <div className="pt-16">
        {stocks?.map((stock) => (
          <StockCard
            key={stock.id}
            brand={stock.tyreDetail.pattern.brand.name}
            vendor={stock.vendor?.name}
            tyreSize={stock.tyreDetail?.tyreSize.size}
            patternName={stock.tyreDetail?.pattern.name}
            dom={stock.dom}
            productLine={stock.product_line.name}
            transportMode={stock.transport.mode}
            purchaseDate={stock.purchaseDate}
            location={stock.location?.name}
            quantity={stock.quantity}
            cost={stock.cost}
            stockId={stock.id}
            role={user?.role}
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);

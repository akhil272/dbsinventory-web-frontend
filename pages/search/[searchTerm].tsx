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
  last_page: stocks.last_page,
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
  last_page,
}) => {
  const router = useRouter();
  const { searchTerm } = router.query;
  if (!router.isReady) {
    return <LoadingAnimation message="Loading stocks. Please wait.." />;
  }

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
  }, [getStocks, page]);

  return (
    <div>
      <div className="pt-16">
        {stocks?.map((stock) => (
          <StockCard
            key={stock.id}
            brand={stock.tyreDetail.pattern.brand.name}
            vendor={stock.vendor?.name}
            tyre_size={stock.tyreDetail?.tyreSize.size}
            pattern_name={stock.tyreDetail?.pattern.name}
            dom={stock.dom}
            product_line={stock.product_line}
            transport_mode={stock.transport.mode}
            purchase_date={stock.purchase_date}
            location={stock.location?.name}
            quantity={stock.quantity}
            cost={stock.cost}
            stockId={stock.id}
            role={user?.roles}
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);

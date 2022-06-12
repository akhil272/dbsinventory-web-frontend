import { initialState } from "@Store/rootReducer";
import { deleteStock, getStocks } from "@Store/stocks/actions";

import { connect } from "react-redux";

import Stocks from "./stocks";
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

export default connect(mapStateToProps, mapDispatchToProps)(Stocks);

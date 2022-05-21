import { initialState } from "@Store/rootReducer";
import { getStocks } from "@Store/stocks/actions";

import { connect } from "react-redux";

import Stocks from "./stocks";
const mapStateToProps = ({ stocks }: typeof initialState) => ({
  stocks: stocks.stocks,
  total: stocks.total,
  page: stocks.page,
  last_page: stocks.last_page,
});

const mapDispatchToProps = () => ({
  getStocks,
});

export default connect(mapStateToProps, mapDispatchToProps)(Stocks);

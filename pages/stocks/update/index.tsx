import { initialState } from "@Store/rootReducer";
import { getStockById, updateStock } from "@Store/stocks/actions";

import { connect } from "react-redux";
import Update from "./update";
const mapStateToProps = ({ stocks }: typeof initialState) => ({
  stock: stocks.stock,
  loading: stocks.loading,
});

const mapDispatchToProps = () => ({
  getStockById,
  updateStock,
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);

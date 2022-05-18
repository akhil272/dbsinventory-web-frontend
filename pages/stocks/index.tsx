import { initialState } from "@Store/rootReducer";
import { createBrand, getBrands } from "@Store/tyre/actions";
import { connect } from "react-redux";
import Stocks from "./stocks";

const mapStateToProps = ({ tyres }: typeof initialState) => ({
  brands: tyres.brands,
});

const mapDispatchToProps = () => ({
  getBrands,
  createBrand,
});

export default connect(mapStateToProps, mapDispatchToProps)(Stocks);

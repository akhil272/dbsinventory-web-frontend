import { initialState } from "@Store/rootReducer";
import { createBrand, createPattern, getBrands } from "@Store/tyre/actions";
import { connect } from "react-redux";
import Create from "./create";
const mapStateToProps = ({ tyres }: typeof initialState) => ({
  brands: tyres.brands,
});
const mapDispatchToProps = () => ({
  createPattern,
  getBrands,
  createBrand,
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);

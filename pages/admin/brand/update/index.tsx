import { initialState } from "@Store/rootReducer";
import { getBrands, updateBrand } from "@Store/tyre/actions";
import { connect } from "react-redux";
import Update from "./update";
const mapStateToProps = ({ tyres }: typeof initialState) => ({
  brands: tyres.brands,
});

const mapDispatchToProps = () => ({
  getBrands,
  updateBrand,
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);

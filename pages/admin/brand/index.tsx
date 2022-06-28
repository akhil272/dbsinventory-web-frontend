import { initialState } from "@Store/rootReducer";
import { createBrand, getBrands } from "@Store/tyre/actions";
import { connect } from "react-redux";
import Brand from "./brand";
const mapStateToProps = ({ tyres }: typeof initialState) => ({
  brands: tyres.brands,
});

const mapDispatchToProps = () => ({
  getBrands,
});

export default connect(mapStateToProps, mapDispatchToProps)(Brand);

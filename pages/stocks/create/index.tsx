import { initialState } from "@Store/rootReducer";
import {
  createBrand,
  createPattern,
  createTyreDetail,
  createTyreSize,
  getBrands,
  getTyreDetails,
  getTyreSizes,
} from "@Store/tyre/actions";
import { connect } from "react-redux";
import CreateStock from "./create";

const mapStateToProps = ({ tyres }: typeof initialState) => ({
  brands: tyres.brands,
  tyreSizes: tyres.tyreSizes,
  tyreDetails: tyres.tyreDetails,
});

const mapDispatchToProps = () => ({
  getBrands,
  createBrand,
  createPattern,
  getTyreSizes,
  createTyreSize,
  getTyreDetails,
  createTyreDetail,
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateStock);

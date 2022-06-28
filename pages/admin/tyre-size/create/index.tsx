import { initialState } from "@Store/rootReducer";
import {
  createBrand,
  createPattern,
  createTyreDetailSize,
  createTyreSize,
  getBrands,
  getTyreDetails,
  getTyreSizes,
} from "@Store/tyre/actions";
import { connect } from "react-redux";
import Create from "./create";
const mapStateToProps = ({ tyres }: typeof initialState) => ({
  brands: tyres.brands,
  tyreSizes: tyres.tyreSizes,
  tyreDetails: tyres.tyreDetails,
});
const mapDispatchToProps = () => ({
  createPattern,
  getBrands,
  createBrand,
  createTyreDetailSize,
  createTyreSize,
  getTyreDetails,
  getTyreSizes,
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);

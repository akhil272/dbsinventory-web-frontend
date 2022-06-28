import {
  getVendors,
  createVendor,
  getTransports,
  createTransport,
  getLocations,
  createLocation,
} from "@Store/adminPanel/actions";
import { initialState } from "@Store/rootReducer";
import { createStock } from "@Store/stocks/actions";
import {
  createBrand,
  createLoadIndex,
  createPattern,
  createProductLine,
  createSpeedRating,
  createTyreDetailSize,
  createTyreSize,
  getBrands,
  getLoadIndexes,
  getProductLines,
  getSpeedRatings,
  getTyreDetails,
  getTyreSizes,
} from "@Store/tyre/actions";
import { connect } from "react-redux";
import CreateStock from "./create";
const mapStateToProps = ({ tyres, adminPanel }: typeof initialState) => ({
  brands: tyres.brands,
  tyreSizes: tyres.tyreSizes,
  tyreDetails: tyres.tyreDetails,
  speedRatings: tyres.speedRatings,
  loadIndexes: tyres.loadIndexes,
  locations: adminPanel.locations,
  vendors: adminPanel.vendors,
  transports: adminPanel.transports,
  productLines: tyres.productLines,
});

const mapDispatchToProps = () => ({
  getBrands,
  createBrand,
  createPattern,
  getTyreSizes,
  createTyreSize,
  getTyreDetails,
  createTyreDetailSize,
  getVendors,
  createVendor,
  getTransports,
  createTransport,
  getLocations,
  createLocation,
  createStock,
  createSpeedRating,
  createLoadIndex,
  createProductLine,
  getSpeedRatings,
  getLoadIndexes,
  getProductLines,
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateStock);

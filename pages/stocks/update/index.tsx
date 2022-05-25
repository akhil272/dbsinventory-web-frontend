import {
  getVendors,
  createVendor,
  getTransports,
  createTransport,
  getLocations,
  createLocation,
} from "@Store/adminPanel/actions";
import { initialState } from "@Store/rootReducer";
import { createStock, getStockById, updateStock } from "@Store/stocks/actions";
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
import Update from "./update";
const mapStateToProps = ({
  tyres,
  adminPanel,
  stocks,
}: typeof initialState) => ({
  brands: tyres.brands,
  tyreSizes: tyres.tyreSizes,
  tyreDetails: tyres.tyreDetails,
  locations: adminPanel.locations,
  vendors: adminPanel.vendors,
  transports: adminPanel.transports,
  stock: stocks.stock,
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
  getStockById,
  updateStock,
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);

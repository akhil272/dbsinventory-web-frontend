import {
  getVendors,
  createVendor,
  getTransports,
  createTransport,
  getLocations,
  createLocation,
} from "@Store/adminPanel/actions";
import { initialState } from "@Store/rootReducer";
import { createBrand, getBrands } from "@Store/tyre/actions";
import { connect } from "react-redux";
import Brand from "./brand";
const mapStateToProps = ({ tyres }: typeof initialState) => ({
  brands: tyres.brands,
});

const mapDispatchToProps = () => ({
  getBrands,
  createBrand,
});

export default connect(mapStateToProps, mapDispatchToProps)(Brand);

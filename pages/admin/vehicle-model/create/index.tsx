import {
  createVehicleBrand,
  createVehicleModel,
  getVehicleBrands,
} from "@Store/adminPanel/actions";
import { initialState } from "@Store/rootReducer";
import { connect } from "react-redux";
import Create from "./create";
const mapStateToProps = ({ adminPanel }: typeof initialState) => ({
  vehicleBrands: adminPanel.vehicleBrands,
});
const mapDispatchToProps = () => ({
  createVehicleModel,
  getVehicleBrands,
  createVehicleBrand,
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);

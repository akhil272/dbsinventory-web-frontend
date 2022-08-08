import { getVehicleModels } from "@Store/adminPanel/actions";
import { initialState } from "@Store/rootReducer";
import { connect } from "react-redux";
import VehicleModel from "./vehicle-model";
const mapStateToProps = ({ adminPanel }: typeof initialState) => ({
  vehicleModels: adminPanel.vehicleModels,
});

const mapDispatchToProps = () => ({
  getVehicleModels,
});

export default connect(mapStateToProps, mapDispatchToProps)(VehicleModel);

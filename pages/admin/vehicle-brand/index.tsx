import { getVehicleBrands } from "@Store/adminPanel/actions";
import { initialState } from "@Store/rootReducer";
import { connect } from "react-redux";
import VehicleBrand from "./vehicle-brand";
const mapStateToProps = ({ adminPanel }: typeof initialState) => ({
  vehicleBrands: adminPanel.vehicleBrands,
});

const mapDispatchToProps = () => ({
  getVehicleBrands,
});

export default connect(mapStateToProps, mapDispatchToProps)(VehicleBrand);

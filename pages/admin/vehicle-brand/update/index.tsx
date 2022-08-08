import { updateVehicleBrand } from "@Store/adminPanel/actions";
import { connect } from "react-redux";
import Update from "./update";

const mapDispatchToProps = () => ({
  updateVehicleBrand,
});

export default connect(mapDispatchToProps)(Update);

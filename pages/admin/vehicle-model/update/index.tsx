import { updateVehicleModel } from "@Store/adminPanel/actions";
import { connect } from "react-redux";
import Update from "./update";

const mapDispatchToProps = () => ({
  updateVehicleModel,
});

export default connect(mapDispatchToProps)(Update);

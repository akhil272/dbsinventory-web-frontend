import { createVehicleBrand } from "@Store/adminPanel/actions";
import { connect } from "react-redux";
import Create from "./create";

const mapDispatchToProps = () => ({
  createVehicleBrand,
});

export default connect(mapDispatchToProps)(Create);

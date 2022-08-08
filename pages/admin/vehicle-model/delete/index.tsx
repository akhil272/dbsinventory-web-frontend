import { deleteVehicleModel } from "@Store/adminPanel/actions";
import { connect } from "react-redux";
import Delete from "./delete";

const mapDispatchToProps = () => ({
  deleteVehicleModel,
});

export default connect(mapDispatchToProps)(Delete);

import { deleteVehicleBrand } from "@Store/adminPanel/actions";
import { connect } from "react-redux";
import Delete from "./delete";

const mapDispatchToProps = () => ({
  deleteVehicleBrand,
});

export default connect(mapDispatchToProps)(Delete);

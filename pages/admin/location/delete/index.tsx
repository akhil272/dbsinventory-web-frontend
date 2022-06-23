import { deleteLocation } from "@Store/adminPanel/actions";
import { connect } from "react-redux";
import Delete from "./delete";

const mapDispatchToProps = () => ({
  deleteLocation,
});

export default connect(mapDispatchToProps)(Delete);

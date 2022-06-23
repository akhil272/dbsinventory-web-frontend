import { updateLocation } from "@Store/adminPanel/actions";
import { connect } from "react-redux";
import Update from "./update";

const mapDispatchToProps = () => ({
  updateLocation,
});

export default connect(mapDispatchToProps)(Update);

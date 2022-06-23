import { createLocation } from "@Store/adminPanel/actions";
import { connect } from "react-redux";
import Create from "./create";

const mapDispatchToProps = () => ({
  createLocation,
});

export default connect(mapDispatchToProps)(Create);

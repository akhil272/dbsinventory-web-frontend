import { createVendor } from "@Store/adminPanel/actions";
import { connect } from "react-redux";
import Create from "./create";

const mapDispatchToProps = () => ({
  createVendor,
});

export default connect(mapDispatchToProps)(Create);

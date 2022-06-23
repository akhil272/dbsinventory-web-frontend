import { updateVendor } from "@Store/adminPanel/actions";
import { connect } from "react-redux";
import Update from "./update";

const mapDispatchToProps = () => ({
  updateVendor,
});

export default connect(mapDispatchToProps)(Update);

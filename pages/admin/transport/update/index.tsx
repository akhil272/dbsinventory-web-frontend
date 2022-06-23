import { updateTransport } from "@Store/adminPanel/actions";
import { connect } from "react-redux";
import Update from "./update";

const mapDispatchToProps = () => ({
  updateTransport,
});

export default connect(mapDispatchToProps)(Update);

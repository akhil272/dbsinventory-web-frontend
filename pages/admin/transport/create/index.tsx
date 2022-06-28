import { createTransport } from "@Store/adminPanel/actions";
import { connect } from "react-redux";
import Create from "./create";

const mapDispatchToProps = () => ({
  createTransport,
});

export default connect(mapDispatchToProps)(Create);

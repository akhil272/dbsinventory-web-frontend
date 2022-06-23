import { createProductLine } from "@Store/tyre/actions";
import { connect } from "react-redux";
import Create from "./create";

const mapDispatchToProps = () => ({
  createProductLine,
});

export default connect(mapDispatchToProps)(Create);

import { createLoadIndex } from "@Store/tyre/actions";
import { connect } from "react-redux";
import Create from "./create";

const mapDispatchToProps = () => ({
  createLoadIndex,
});

export default connect(mapDispatchToProps)(Create);

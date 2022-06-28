import { updateLoadIndex } from "@Store/tyre/actions";
import { connect } from "react-redux";
import Update from "./update";

const mapDispatchToProps = () => ({
  updateLoadIndex,
});

export default connect(mapDispatchToProps)(Update);

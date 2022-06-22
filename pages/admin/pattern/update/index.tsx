import { updatePattern } from "@Store/tyre/actions";
import { connect } from "react-redux";
import Update from "./update";

const mapDispatchToProps = () => ({
  updatePattern,
});

export default connect(mapDispatchToProps)(Update);

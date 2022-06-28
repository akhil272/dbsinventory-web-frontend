import { updateProductLine } from "@Store/tyre/actions";
import { connect } from "react-redux";
import Update from "./update";

const mapDispatchToProps = () => ({
  updateProductLine,
});

export default connect(mapDispatchToProps)(Update);

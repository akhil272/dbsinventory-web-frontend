import { updateTyreSize } from "@Store/tyre/actions";
import { connect } from "react-redux";
import Update from "./update";

const mapDispatchToProps = () => ({
  updateTyreSize,
});

export default connect(mapDispatchToProps)(Update);

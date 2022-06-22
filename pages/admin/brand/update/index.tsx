import { updateBrand } from "@Store/tyre/actions";
import { connect } from "react-redux";
import Update from "./update";

const mapDispatchToProps = () => ({
  updateBrand,
});

export default connect(mapDispatchToProps)(Update);

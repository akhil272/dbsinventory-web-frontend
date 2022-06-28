import { createBrand } from "@Store/tyre/actions";
import { connect } from "react-redux";
import Create from "./create";

const mapDispatchToProps = () => ({
  createBrand,
});

export default connect(mapDispatchToProps)(Create);

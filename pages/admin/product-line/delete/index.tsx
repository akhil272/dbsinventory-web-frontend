import { deleteProductLine } from "@Store/tyre/actions";
import { connect } from "react-redux";
import Delete from "./delete";

const mapDispatchToProps = () => ({
  deleteProductLine,
});

export default connect(mapDispatchToProps)(Delete);

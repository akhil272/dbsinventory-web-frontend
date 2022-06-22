import { deletePattern } from "@Store/tyre/actions";
import { connect } from "react-redux";
import Delete from "./delete";

const mapDispatchToProps = () => ({
  deletePattern,
});

export default connect(mapDispatchToProps)(Delete);

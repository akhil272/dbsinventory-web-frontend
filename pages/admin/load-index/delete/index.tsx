import { deleteLoadIndex } from "@Store/tyre/actions";
import { connect } from "react-redux";
import Delete from "./delete";

const mapDispatchToProps = () => ({
  deleteLoadIndex,
});

export default connect(mapDispatchToProps)(Delete);

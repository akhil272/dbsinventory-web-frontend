import { deleteTransport } from "@Store/adminPanel/actions";
import { connect } from "react-redux";
import Delete from "./delete";

const mapDispatchToProps = () => ({
  deleteTransport,
});

export default connect(mapDispatchToProps)(Delete);

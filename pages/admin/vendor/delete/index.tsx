import { deleteVendor } from "@Store/adminPanel/actions";
import { connect } from "react-redux";
import Delete from "./delete";

const mapDispatchToProps = () => ({
  deleteVendor,
});

export default connect(mapDispatchToProps)(Delete);

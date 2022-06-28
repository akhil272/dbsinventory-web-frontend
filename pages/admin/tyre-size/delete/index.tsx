import { deleteTyreDetail } from "@Store/tyre/actions";
import { connect } from "react-redux";
import Delete from "./delete";

const mapDispatchToProps = () => ({
  deleteTyreDetail,
});

export default connect(mapDispatchToProps)(Delete);

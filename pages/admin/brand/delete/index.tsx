import { deleteBrand } from "@Store/tyre/actions";
import { connect } from "react-redux";
import Delete from "./delete";

const mapDispatchToProps = () => ({
  deleteBrand,
});

export default connect(mapDispatchToProps)(Delete);

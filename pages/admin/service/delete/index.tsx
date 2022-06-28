import { deleteService } from "@Store/quotations/actions";
import { connect } from "react-redux";
import Delete from "./delete";

const mapDispatchToProps = () => ({
  deleteService,
});

export default connect(mapDispatchToProps)(Delete);

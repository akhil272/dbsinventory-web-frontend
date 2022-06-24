import { createService } from "@Store/quotations/actions";
import { connect } from "react-redux";
import Create from "./create";

const mapDispatchToProps = () => ({
  createService,
});

export default connect(mapDispatchToProps)(Create);

import { updateService } from "@Store/quotations/actions";
import { connect } from "react-redux";
import Update from "./update";

const mapDispatchToProps = () => ({
  updateService,
});

export default connect(mapDispatchToProps)(Update);

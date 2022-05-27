import { deleteStock } from "@Store/stocks/actions";
import DeleteAStock from "./delete";
import { connect } from "react-redux";

const mapDispatchToProps = () => ({
  deleteStock,
});
export default connect(mapDispatchToProps)(DeleteAStock);

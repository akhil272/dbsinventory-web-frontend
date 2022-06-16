import { updateQuotationById } from "@Store/quotations/actions";
import { connect } from "react-redux";
import QuotationStatus from "./quotation-status";
const mapDispatchToProps = () => ({
  updateQuotationById,
});
export default connect(null, mapDispatchToProps)(QuotationStatus);

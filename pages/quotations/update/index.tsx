import {
  getQuotationById,
  sendQuotationToUser,
  updateQuotationById,
} from "@Store/quotations/actions";
import { initialState } from "@Store/rootReducer";
import { connect } from "react-redux";
import UpdateQuotation from "./update-quotation";
const mapStateToProps = ({ quotations }: typeof initialState) => ({
  loading: quotations.loading,
  quotation: quotations.quotation,
});

const mapDispatchToProps = () => ({
  getQuotationById,
  updateQuotationById,
  sendQuotationToUser,
});
export default connect(mapStateToProps, mapDispatchToProps)(UpdateQuotation);

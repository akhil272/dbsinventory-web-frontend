import {
  getQuotationById,
  updateQuotationServiceCostById,
} from "@Store/quotations/actions";
import { initialState } from "@Store/rootReducer";
import { connect } from "react-redux";
import QuotationService from "./quotation-services";
const mapStateToProps = ({ quotations }: typeof initialState) => ({
  loading: quotations.loading,
  quotation: quotations.quotation,
});

const mapDispatchToProps = () => ({
  getQuotationById,
  updateQuotationServiceCostById,
});
export default connect(mapStateToProps, mapDispatchToProps)(QuotationService);

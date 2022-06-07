import { getQuotationById } from "@Store/quotations/actions";
import { initialState } from "@Store/rootReducer";
import { connect } from "react-redux";
import UserQuote from "./user-quote";
const mapStateToProps = ({ quotations }: typeof initialState) => ({
  loading: quotations.loading,
  quotation: quotations.quotation,
});

const mapDispatchToProps = () => ({
  getQuotationById,
});
export default connect(mapStateToProps, mapDispatchToProps)(UserQuote);

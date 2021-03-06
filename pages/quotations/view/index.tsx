import { getCustomerCategories } from "@Store/customers/action";
import { getQuotationById } from "@Store/quotations/actions";
import { initialState } from "@Store/rootReducer";
import { connect } from "react-redux";
import Quotation from "./quotation";
const mapStateToProps = ({ quotations }: typeof initialState) => ({
  loading: quotations.loading,
  quotation: quotations.quotation,
});

const mapDispatchToProps = () => ({
  getQuotationById,
  getCustomerCategories,
});
export default connect(mapStateToProps, mapDispatchToProps)(Quotation);

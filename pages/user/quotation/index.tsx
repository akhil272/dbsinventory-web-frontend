import { getCustomerCategories } from "@Store/customers/action";
import {
  getQuotationById,
  updateQuotationById,
} from "@Store/quotations/actions";
import { initialState } from "@Store/rootReducer";
import { connect } from "react-redux";
import UserQuotation from "./user-quotation";
const mapStateToProps = ({ quotations }: typeof initialState) => ({
  loading: quotations.loading,
  quotation: quotations.quotation,
});

const mapDispatchToProps = () => ({
  getQuotationById,
  getCustomerCategories,
  updateQuotationById,
});
export default connect(mapStateToProps, mapDispatchToProps)(UserQuotation);

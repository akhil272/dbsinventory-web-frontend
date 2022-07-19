import { getCustomerCategories } from "@Store/customers/action";
import { getQuotations } from "@Store/quotations/actions";
import { initialState } from "@Store/rootReducer";
import { connect } from "react-redux";
import DeclinedQuotations from "./declined-quotations";
const mapStateToProps = ({ quotations, customers }: typeof initialState) => ({
  quotations: quotations.quotations,
  total: quotations.total,
  page: quotations.page,
  lastPage: quotations.lastPage,
  loading: quotations.loading,
  customerCategories: customers.customerCategories,
});

const mapDispatchToProps = () => ({
  getQuotations,
  getCustomerCategories,
});

export default connect(mapStateToProps, mapDispatchToProps)(DeclinedQuotations);

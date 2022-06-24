import { getCustomerCategories } from "@Store/customers/action";
import { initialState } from "@Store/rootReducer";
import { connect } from "react-redux";
import CustomerCategory from "./customer-category";
const mapStateToProps = ({ customers }: typeof initialState) => ({
  loading: customers.loading,
  customerCategories: customers.customerCategories,
});

const mapDispatchToProps = () => ({
  getCustomerCategories,
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerCategory);

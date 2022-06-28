import {
  createCustomerCategory,
  getCustomerCategories,
  updateCustomerCategory,
} from "@Store/customers/action";
import { initialState } from "@Store/rootReducer";
import { connect } from "react-redux";
import UpdateCustomerCategory from "./customer-category";

const mapStateToProps = ({ customers }: typeof initialState) => ({
  loading: customers.loading,
  customerCategories: customers.customerCategories,
});
const mapDispatchToProps = () => ({
  getCustomerCategories,
  createCustomerCategory,
  updateCustomerCategory,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateCustomerCategory);

import { updateCustomerCategoryName } from "@Store/customers/action";
import { connect } from "react-redux";
import Update from "./update";

const mapDispatchToProps = () => ({
  updateCustomerCategoryName,
});

export default connect(mapDispatchToProps)(Update);

import { createCustomerCategory } from "@Store/customers/action";
import { connect } from "react-redux";
import Create from "./create";

const mapDispatchToProps = () => ({
  createCustomerCategory,
});

export default connect(mapDispatchToProps)(Create);

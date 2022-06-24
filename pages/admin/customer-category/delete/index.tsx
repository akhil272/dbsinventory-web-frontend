import { deleteCustomerCategory } from "@Store/customers/action";
import { connect } from "react-redux";
import Delete from "./delete";

const mapDispatchToProps = () => ({
  deleteCustomerCategory,
});

export default connect(mapDispatchToProps)(Delete);

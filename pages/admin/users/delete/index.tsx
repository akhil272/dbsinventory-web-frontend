import DeleteAUser from "./delete";
import { connect } from "react-redux";
import { deleteUser } from "@Store/users/actions";

const mapDispatchToProps = () => ({
  deleteUser,
});
export default connect(mapDispatchToProps)(DeleteAUser);

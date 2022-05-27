import { validateVerification } from "@Store/auth/actions";
import { connect } from "react-redux";
import VerifyUser from "./verify-user";

const mapDispatchToProps = () => ({
  validateVerification,
});

export default connect(null, mapDispatchToProps)(VerifyUser);

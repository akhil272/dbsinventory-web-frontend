import { validateOtpAndVerifyPhoneNumber } from "@Store/auth/actions";
import { connect } from "react-redux";
import VerifyUser from "./verify-user";

const mapDispatchToProps = () => ({
  validateOtpAndVerifyPhoneNumber,
});

export default connect(null, mapDispatchToProps)(VerifyUser);

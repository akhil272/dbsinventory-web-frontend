import { login, sendOtp } from "@Store/auth/actions";
import { connect } from "react-redux";
import Login from "./login";

const mapDispatchToProps = () => ({
  login,
  sendOtp,
});

export default connect(null, mapDispatchToProps)(Login);

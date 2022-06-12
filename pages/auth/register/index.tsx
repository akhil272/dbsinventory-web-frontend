import { register, sendOtp } from "@Store/auth/actions";
import { connect } from "react-redux";
import Register from "./register";

const mapDispatchToProps = () => ({
  register,
});

export default connect(null, mapDispatchToProps)(Register);

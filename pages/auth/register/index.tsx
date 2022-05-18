import { initiateVerification, register } from "@Store/auth/actions";
import { initialState } from "@Store/rootReducer";
import { connect } from "react-redux";
import Register from "./register";

const mapStateToProps = ({ users }: typeof initialState) => ({
  users: users.user,
});

const mapDispatchToProps = () => ({
  register,
  initiateVerification,
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);

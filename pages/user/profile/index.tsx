import { initialState } from "@Store/rootReducer";
import { getUserById } from "@Store/users/actions";
import { connect } from "react-redux";
import Profile from "./profile";

const mapStateToProps = ({ users }: typeof initialState) => ({
  userProfile: users.userProfile,
  loading: users.loading,
});

const mapDispatchToProps = () => ({
  getUserById,
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);

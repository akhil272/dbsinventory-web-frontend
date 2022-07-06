import { initialState } from "@Store/rootReducer";
import { getUserById, updateUser } from "@Store/users/actions";

import { connect } from "react-redux";
import Update from "./update";
const mapStateToProps = ({ users }: typeof initialState) => ({
  userProfile: users.userProfile,
  loading: users.loading,
});

const mapDispatchToProps = () => ({
  getUserById,
  updateUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);

import { initialState } from "@Store/rootReducer";
import { connect } from "react-redux";
import Profile from "./profile";
const mapStateToProps = ({ users }: typeof initialState) => ({
  user: users.user,
  loading: users.loading,
});

//   const mapDispatchToProps = () => ({
//     getUsers,
//     createUser,
//   });
export default connect(mapStateToProps)(Profile);

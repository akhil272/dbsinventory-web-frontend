import { getUserById } from "@Store/users/actions";
import { useEffect } from "react";
import { connect } from "react-redux";
import Login from "./auth/login";
import Search from "./search";
import { initialState } from "@Store/rootReducer";

// const mapStateToProps = ({ users }: typeof initialState) => ({
//   user: users.user,
// });

// const mapStateToProps = ({ auth }: typeof initialState) => ({
//   user: auth.user,
// });

// const mapDispatchToProps = () => ({
//   getUserById,
// });

function Homepage({ user, getUserById }) {
  return <Search />;
  // if (user) {
  //   console.log(" user found");
  //   return <Search />;
  // }
  // return <Login />;
}

export default connect(null)(Homepage);

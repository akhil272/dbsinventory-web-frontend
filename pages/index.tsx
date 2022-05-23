import { getUserById, getUserInfo } from "@Store/users/actions";
import { useEffect } from "react";
import { connect } from "react-redux";
import Login from "./auth/login";
import Search from "./search";
import { initialState } from "@Store/rootReducer";
import storage from "@Utils/storage";
import LoadingAnimation from "@Components/LoadingAnimation";

const mapStateToProps = ({ users }: typeof initialState) => ({
  user: users.user,
  loading: users.loading,
});

// const mapStateToProps = ({ auth }: typeof initialState) => ({
//   user: auth.user,
// });

// const mapDispatchToProps = () => ({
//   getUserById,
// });

const Homepage = ({ user, loading }) => {
  if (loading) {
    return <LoadingAnimation message="Please wait..." />;
  }
  if (!user) {
    return <Login />;
  }
  return <Search />;
};

export default connect(mapStateToProps)(Homepage);

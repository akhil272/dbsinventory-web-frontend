import { connect } from "react-redux";
import Login from "./auth/login";
import { initialState } from "@Store/rootReducer";
import LoadingAnimation from "@Components/LoadingAnimation";
import GetAQuote from "./quotations/get-a-quote";
import { getUserInfo } from "@Store/users/actions";
import { useEffect } from "react";
import Search from "./search";
import AdminPanel from "./admin";

const mapStateToProps = ({ users }: typeof initialState) => ({
  user: users.user,
  loading: users.loading,
});

const mapDispatchToProps = () => ({
  getUserInfo,
});

const Homepage = ({ user, loading, getUserInfo }) => {
  useEffect(() => {
    getUserInfo();
  }, []);
  if (loading) {
    return <LoadingAnimation message="Please wait..." />;
  }
  if (!user) {
    return <Login />;
  }
  if (user?.role === "user") {
    return <GetAQuote />;
  }
  if (user?.role === "admin") {
    return <AdminPanel />;
  }
  return <Search />;
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

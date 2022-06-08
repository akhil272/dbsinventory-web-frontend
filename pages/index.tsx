import { connect } from "react-redux";
import Login from "./auth/login";
import { initialState } from "@Store/rootReducer";
import LoadingAnimation from "@Components/LoadingAnimation";
import GetAQuote from "./quotations/get-a-quote";

const mapStateToProps = ({ users }: typeof initialState) => ({
  user: users.user,
  loading: users.loading,
});

const Homepage = ({ user, loading }) => {
  if (loading) {
    return <LoadingAnimation message="Please wait..." />;
  }
  if (!user) {
    return <Login />;
  }
  return <GetAQuote />;
};

export default connect(mapStateToProps)(Homepage);

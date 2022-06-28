import { initialState } from "@Store/rootReducer";
import { getUserOverview } from "@Store/users/actions";
import { connect } from "react-redux";
import UserDashboard from "./dashboard";

const mapStateToProps = ({ users }: typeof initialState) => ({
  user: users.user,
  loading: users.loading,
  overview: users.overview,
});

const mapDispatchToProps = () => ({
  getUserOverview,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);

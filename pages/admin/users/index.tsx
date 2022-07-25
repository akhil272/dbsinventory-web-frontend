import Users from "./users";
import { connect } from "react-redux";
import { initialState } from "@Store/rootReducer";
import { getUsers, createUser } from "@Store/users/actions";

const mapStateToProps = ({ users }: typeof initialState) => ({
  users: users.users,
  loading: users.loading,
  page: users.page,
  lastPage: users.lastPage,
  total: users.total,
});

const mapDispatchToProps = () => ({
  getUsers,
  createUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);

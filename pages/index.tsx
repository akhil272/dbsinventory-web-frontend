import { getUserById } from "@Store/users/actions";
import { useEffect } from "react";
import { connect } from "react-redux";
import Login from "./auth/login";
import Search from "./search";
import { initialState } from "@Store/rootReducer";

const mapStateToProps = ({ users }: typeof initialState) => ({
  user: users.user,
});

const mapDispatchToProps = () => ({
  getUserById,
});

function Homepage({ user, getUserById }) {
  useEffect(() => {
    getUserById("a7e1247e-e6f6-4473-98d3-077d6b8081dd");
  }, []);
  console.log(user, "user data");
  if (!user) {
    return <Login />;
  } else {
    return <Search />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

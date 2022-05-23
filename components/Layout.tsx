import Login from "@Pages/auth/login";
import Register from "@Pages/auth/register";
import { initialState } from "@Store/rootReducer";
import { getUserInfo } from "@Store/users/actions";
import storage from "@Utils/storage";
import Router from "next/router";
import { useEffect } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import LoadingAnimation from "./LoadingAnimation";

const mapStateToProps = ({ users }: typeof initialState) => ({
  user: users.user,
  loading: users.loading,
});
const Layout = ({ children, user, loading }) => {
  useEffect(() => {
    storage().getAccessToken();
    getUserInfo();
  }, []);

  return (
    <div className="bg-neutral-100 min-h-screen ">
      <div className="fixed w-full bg-inherit">
        {user?.roles && <Header userRole={user?.roles} />}
      </div>
      <div className="px-5    ">{children}</div>
    </div>
  );
};

export default connect(mapStateToProps)(Layout);

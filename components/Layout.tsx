import { initialState } from "@Store/rootReducer";
import { getUserInfo } from "@Store/users/actions";
import storage from "@Utils/storage";
import { useEffect } from "react";
import { connect } from "react-redux";
import Header from "./Header";

const mapStateToProps = ({ users }: typeof initialState) => ({
  user: users.user,
  loading: users.loading,
});
const Layout = ({ children, user, loading }) => {
  useEffect(() => {
    storage().getAccessToken();
    getUserInfo();
  }, []);
  const userName = user?.first_name;
  return (
    <div className="bg-neutral-100 min-h-screen ">
      <div className="bg-inherit">
        {user?.roles && <Header userRole={user?.roles} userName={userName} />}
      </div>
      <div className="px-4">{children}</div>
    </div>
  );
};

export default connect(mapStateToProps)(Layout);

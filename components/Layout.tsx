import { initialState } from "@Store/rootReducer";
import { getUserInfo } from "@Store/users/actions";
import { useEffect } from "react";
import { connect } from "react-redux";
import Header from "./Header";

const mapStateToProps = ({ users }: typeof initialState) => ({
  user: users.user,
});
const Layout = ({ children, user }) => {
  const userName = user?.firstName;
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <div className="bg-neutral-100 min-h-screen ">
      <div className="bg-inherit">
        {user?.role && <Header userRole={user?.role} userName={userName} />}
      </div>
      <div className="grid justify-items-center pt-14 ">
        <div className="max-w-3xl w-screen px-4 ">{children}</div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Layout);

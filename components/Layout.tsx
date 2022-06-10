import { initialState } from "@Store/rootReducer";
import { connect } from "react-redux";
import Header from "./Header";

const mapStateToProps = ({ users }: typeof initialState) => ({
  user: users.user,
});
const Layout = ({ children, user }) => {
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

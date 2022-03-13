import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../store";
import Login from "./login";
import Search from "./search";

function Homepage() {
  const token = useSelector((state: RootStore) => state.auth.token);

  return <div>{token != null ? <Search /> : <Login />}</div>;
}

export default Homepage;

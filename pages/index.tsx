import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../store";
import { retrieveUser } from "../store/actions/AuthActions";
import Login from "./login";
import Search from "./search";

function Homepage() {
  const dispatch = useDispatch();
  const token = useSelector((state: RootStore) => state.auth.token);

  useEffect(() => {
    dispatch(retrieveUser());
  }, []);

  return <div>{token != null ? <Search /> : <Login />}</div>;
}

export default Homepage;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../pages/login";
import { RootStore } from "../store";
import { retrieveUser } from "../store/actions/AuthActions";
import Header from "./Header";
import LoadingAnimation from "./LoadingAnimation";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootStore) => state.auth.token);
  const isLoading = useSelector((state: RootStore) => state.auth.isLoading);
  useEffect(() => {
    console.log("who many times");
    dispatch(retrieveUser());
  }, []);
  if (isLoading) {
    return <LoadingAnimation message="Loading..please wait." />;
  }
  if (token === null) {
    return <Login />;
  } else {
    return (
      <>
        <Header />
        <div>{children}</div>
      </>
    );
  }
};

export default Layout;

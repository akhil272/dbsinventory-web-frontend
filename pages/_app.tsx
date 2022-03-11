import "../styles/globals.css";
import store from "../store";
import { Provider } from "react-redux";
import Router from "next/router";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

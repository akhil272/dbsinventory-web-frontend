import "../styles/globals.css";
import store from "../store";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <ToastContainer autoClose={2000} transition={Slide} />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;

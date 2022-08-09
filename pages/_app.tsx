import "../styles/globals.css";
import store from "../store";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Provider store={store}>
        <Layout>
          <ToastContainer autoClose={2000} transition={Slide} />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;

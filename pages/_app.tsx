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
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="full-screen" content="yes" />
        <meta name="browsermode" content="application" />
        <meta name="screen-orientation" content="portrait" />
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

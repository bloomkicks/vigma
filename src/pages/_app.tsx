import "@/styles/globals.css";
import "@/styles/components.css";
import type { AppProps } from "next/app";
import store from "@/store";

import Head from "next/head";
import { Provider } from "react-redux";

import Layout from "@/components/layout/Layout";
import Scripts from "@/components/head-components/Scripts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {process.env.NODE_ENV === "development" ? <></> : <Scripts />}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

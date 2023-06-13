import MainHead from "@/components/head-components/MainHead";
import Scripts from "@/components/head-components/Scripts";
import "@/styles/globals.css";
import "@/styles/components.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import { Provider } from "react-redux";
import store from "@/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Scripts />
      <MainHead />
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

import Head from "next/head";
import { Provider } from "react-redux";
import ThemeProvider from "../components/layout/ThemeProvider";
import Layout from "../components/layout/Layout";
import store from "../store/index";
import "../styles/globals.scss";

const title = "Мебель на Заказ от Производителя в СПб - Vigma/Вигма";
function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
      </Head>
      <Provider store={store}>
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;

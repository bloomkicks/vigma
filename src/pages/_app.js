import { Provider } from "react-redux";
import store from "../store/index";

import ThemeProvider from "../components/layout/ThemeProvider";
import MainHead from "../components/layout/head-components/MainHead";
import Scripts from "../components/layout/head-components/Scripts";
import Layout from "../components/layout/Layout";
import "../styles/globals.scss";

function App({ Component, pageProps }) {
  return (
    <>
      <MainHead />
      <Scripts />
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

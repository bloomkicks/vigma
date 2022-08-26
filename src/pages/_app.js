import { Provider } from "react-redux";
import ThemeProvider from "../components/layout/ThemeProvider";
import Layout from "../components/layout/Layout";
import store from "../store/index";
import "../styles/globals.scss";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

import { Provider } from "react-redux";
import Layout from "../components/layout/Layout";
import store from "../store/index"
import "../styles/globals.scss";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}

export default App;

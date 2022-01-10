import Layout from "../components/layout/Layout";
import Page from "../components/layout/Page";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
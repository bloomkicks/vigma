import Layout from "../components/layout/Layout";
import "../styles/globals.scss";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;

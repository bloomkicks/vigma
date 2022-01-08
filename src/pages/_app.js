import Layout from "../components/layout/Layout";
import Page from "../components/layout/Page";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <Layout>
      {/* <h1>hey</h1> */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
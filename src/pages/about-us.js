import Head from "next/head";
import AboutUsContent from "../components/aboutus/AboutUsContent";
import Page from "../components/layout/Page";

const title = "О Нас - Vigma";
const description =
  "Мы занимаемся изготовлением, сборкой, распилом, доставкой и установкой корпусной мебели на заказ";

const AboutUsPage = (props) => {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
        {/* OPEN GRAPH */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        {/* TWITTER */}
        <meta name="twitter:title" content={title} />
        <meta name="og:description" content={description} />
      </Head>
      <Page title="Кратко о нас">
        <AboutUsContent />
      </Page>
    </>
  );
};

export default AboutUsPage;

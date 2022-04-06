import WorksContent from "../components/works/WorksContent";
import Head from "next/head";
import Page from "../components/layout/Page";

const title = "Наши работы - Vigma"
const description = "Посмотрите на наши работы и найдете мебель себе по душе"

const WorkPage = (props) => {
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
      <Page title="Наши работы">
        <WorksContent />
      </Page>
    </>
  );
};

export default WorkPage;

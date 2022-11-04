import Works from "../components/works/Works";
import WorksContent from "../components/works/WorksContent";
import Head from "next/head";
// import Page from "../components/layout/Page";

const title = process.env.WORKS_TITLE;
const description = process.env.WORKS_DESCRIPTION;

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
      {/* <div title="Наши работы"> */}
      <Works />
      {/* </div> */}
    </>
  );
};

export default WorkPage;

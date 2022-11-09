import Head from "next/head";

const title = process.env.ERROR_TITLE;
const description = process.env.ERROR_DESCRIPTION;

const ErrorHead = () => {
  return (
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
  );
};

export default ErrorHead;

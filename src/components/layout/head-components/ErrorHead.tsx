import Head from "next/head";

import { errorTitle, errorDescription } from "../../../data/general/page-meta";

const ErrorHead = () => {
  return (
    <Head>
      <meta name="description" content={errorDescription} />
      <title>{errorTitle}</title>
      {/* OPEN GRAPH */}
      <meta property="og:title" content={errorTitle} />
      <meta property="og:description" content={errorDescription} />
      {/* TWITTER */}
      <meta name="twitter:title" content={errorTitle} />
      <meta name="og:description" content={errorDescription} />
    </Head>
  );
};

export default ErrorHead;

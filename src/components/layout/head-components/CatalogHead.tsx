import Head from "next/head";

import {
  catalogTitle,
  catalogDescription,
} from "../../../data/general/page-meta";

const CatalogHead = () => {
  return (
    <Head>
      <meta name="description" content={catalogDescription} />
      <title>{catalogTitle}</title>
      {/* OPEN GRAPH */}
      <meta property="og:title" content={catalogTitle} />
      <meta property="og:description" content={catalogDescription} />
      {/* TWITTER */}
      <meta name="twitter:title" content={catalogTitle} />
      <meta name="og:description" content={catalogDescription} />
    </Head>
  );
};

export default CatalogHead;

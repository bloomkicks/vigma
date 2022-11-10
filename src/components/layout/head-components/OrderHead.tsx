import Head from "next/head";

import { orderTitle, orderDescription } from "../../../data/general/page-meta";

const OrderHead = () => {
  return (
    <Head>
      <meta name="description" content={orderDescription} />
      <title>{orderTitle}</title>
      {/* OPEN GRAPH */}
      <meta property="og:title" content={orderTitle} />
      <meta property="og:description" content={orderDescription} />
      {/* TWITTER */}
      <meta name="twitter:title" content={orderTitle} />
      <meta name="og:description" content={orderDescription} />
    </Head>
  );
};

export default OrderHead;

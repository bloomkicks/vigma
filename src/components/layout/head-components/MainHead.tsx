import Head from "next/head";

import { mainTitle } from "../../../data/general/page-meta";

const MainHead = () => {
  return (
    <Head>
      <title>{mainTitle}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
    </Head>
  );
};

export default MainHead;

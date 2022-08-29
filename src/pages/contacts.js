import ContactsContent from "../components/contacts/ContactsContent.js";
import ContactsMap from "../components/contacts/ContactsMap.js";
import Head from "next/head";
import Page from "../components/layout/Page";

const title = "Контакты - Vigma";
const description = "+7 (812) 642 60-51 | vigmaspb@gmail.com";

const Contacts = (props) => {
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
      <Page notSpaced={true} title="Контакты">
        <ContactsContent />
        <ContactsMap />
      </Page>
    </>
  );
};

export default Contacts;

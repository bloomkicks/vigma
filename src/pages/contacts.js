import ContactsContent from "../components/contacts/ContactsContent.js";
import ContactsImage from "../components/contacts/ContactsImage.js";
import Page from "../components/layout/Page";

const Contacts = (props) => {
  return (
    <Page notSpaced={true} title="Контакты">
      <ContactsContent />
      <ContactsImage />
    </Page>
  );
};

export default Contacts;

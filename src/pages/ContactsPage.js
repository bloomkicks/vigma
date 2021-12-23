import Page from '../components/layout/Page.js'
import ContactsImage from '../components/contacts/ContactsImage.js'
import ContactsContent from '../components/contacts/ContactsContent.js'

const ContactsPage = props => {
  return (
    <Page title="Контакты">
      <ContactsContent />
      <ContactsImage />
    </Page>
  )
}

export default ContactsPage
import phoneSrc from '../../assets/contact/phone.svg'
import emailSrc from '../../assets/contact/email.svg'
import locationSrc from '../../assets/contact/location.svg'
import timeSrc from '../../assets/contact/time.svg'
import directorSrc from '../../assets/contact/director.svg'

import ContactsSection from "./ContactsSection";
import Content from '../layout/Content'
import Italic from "../ui/Italic";
import classes from "./ContactsContent.module.css";

const ContactsContent = props => {
  return (
    <Content className={classes.ContactsContent}>
      <ContactsSection 
        logoSrc={phoneSrc} 
        imgProps={{
          style: {top: '-55%'}
        }}
      >
        Номер телефона: <b>8 (812) 924-10-19</b><br />
        <Italic>(с 12:00 до 18:00)</Italic>
      </ContactsSection>
      <ContactsSection logoSrc={emailSrc}>
        Адрес эл. почты: <b>vigma@gmail.com</b>
      </ContactsSection>
      <ContactsSection 
        logoSrc={locationSrc} 
        imgProps={{
          style: {width: '2.5rem'}
        }}
      >
        Наш адрес: <b>497 Evergreen Rd. Roseville, CA 95673</b>
      </ContactsSection>
      <ContactsSection close={true} logoSrc={timeSrc}>
        График посещения: <b>с 9:30 до 20:00</b> <br />
        <Italic>(по предварительной договорённости)</Italic>
      </ContactsSection>
      <ContactsSection 
        logoSrc={directorSrc}
        imgProps={{
          style: {width: '4rem'}
        }}
      >
        Главный менеджер: <b>Филатов Михаил Юрьевич</b>
      </ContactsSection>
    </Content>
  )
}

export default ContactsContent
import phoneSvg from '../../assets/contact/phone.svg'
import emailSvg from '../../assets/contact/email.svg'
import locationSvg from '../../assets/contact/location.svg'
import timeSvg from '../../assets/contact/time.svg'
import directorSvg from '../../assets/contact/director.svg'

import ContactsSection from "./ContactsSection";
import Italic from "../ui/Italic";
import classes from "./ContactsContent.module.css";

const ContactsContent = props => {
  return (
    <main className={classes.ContactsContent}>
      <ContactsSection 
        logoSrc={phoneSvg} 
        imgProps={{
          style: {top: '-55%'}
        }}
      >
        Номер телефона: <b>8 (812) 924-10-19</b><br />
        <Italic>(с 12:00 до 18:00)</Italic>
      </ContactsSection>
      <ContactsSection logoSrc={emailSvg}>
        Адрес эл. почты: <b>vigma@gmail.com</b>
      </ContactsSection>
      <ContactsSection 
        logoSrc={locationSvg} 
        imgProps={{
          style: {width: '2.5rem'}
        }}
      >
        Наш салон: <b>497 Evergreen Rd. Roseville, CA 95673</b>
      </ContactsSection>
      <ContactsSection logoSrc={timeSvg}>
        График посещения: <b>с 9:30 до 20:00</b> <br />
        <Italic>(по предварительной договорённости)</Italic>
      </ContactsSection>
      <ContactsSection 
        logoSrc={directorSvg}
        imgProps={{
          style: {width: '4rem'}
        }}
      >
        Главный директор: <b>Филатов Михаил Юрьевич</b>
      </ContactsSection>
    </main>
  )
}

export default ContactsContent
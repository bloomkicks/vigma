const phoneSrc = "/contact/phone.svg";
const emailSrc = "/contact/email.svg";
const locationSrc = "/contact/location.svg";
const timeSrc = "/contact/time.svg";
const directorSrc = "/contact/director.svg";

import Link from "next/link";
import Anchor from "../ui/Anchor";
import Content from "../layout/Content";
import ContactsSection from "./ContactsSection";
import classes from "./ContactsContent.module.css";

const ContactsContent = (props) => {
  return (
    <Content className={classes.ContactsContent}>
      <ContactsSection
        logoSrc={phoneSrc}
        imgProps={{
          style: { height: "3.5rem", width: "auto", bottom: "0" },
        }}
        contactKey="Номера телефона:"
      >
        <Anchor
          style={{ color: "inherit", fontSize: "inherit", color: "inherit" }}
          href="tel:+7 (812) 642 60-51"
        >
          <b>+7 (812) 642 60-51</b>
        </Anchor>
        <br />
      </ContactsSection>
      <ContactsSection contactKey="Адрес эл. почты:"logoSrc={emailSrc}>
        <b><Link href="mailto:vigmaspb@gmail.com">vigmaspb@gmail.com</Link></b>
      </ContactsSection>
      <ContactsSection
        logoSrc={locationSrc}
        imgProps={{
          style: { transform: "rotate(5deg)" },
        }}
        contactKey="Адрес производства:"
      >
        <br />
        <b>г. Санкт-Петербург, ул. Автобусная, д. 3, лит. Б</b>
      </ContactsSection>
      <ContactsSection close={true} contactKey="График работы:" logoSrc={timeSrc}>
        <b>с 9:30 до 20:00</b>
      </ContactsSection>
      <ContactsSection contactKey="Главный менеджер:" logoSrc={directorSrc}>
        <b>Филатова Галина Михайловна</b>
      </ContactsSection>
    </Content>
  );
};

export default ContactsContent;

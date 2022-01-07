const phoneSrc = "/contact/phone.svg";
const emailSrc = "/contact/email.svg";
const locationSrc = "/contact/location.svg";
const timeSrc = "/contact/time.svg";
const directorSrc = "/contact/director.svg";

import ContactsSection from "./ContactsSection";
import Anchor from "../ui/Anchor";
import Content from "../layout/Content";
import Italic from "../ui/Italic";
import classes from "./ContactsContent.module.css";

const ContactsContent = (props) => {
  return (
    <Content className={classes.ContactsContent}>
      <ContactsSection
        logoSrc={phoneSrc}
        imgProps={{
          style: { height: "3.5rem", width: "auto", bottom: "0" },
        }}
      >
        Номера телефона:{" "}
        <Anchor
          style={{ color: "inherit", fontSize: "inherit", color: "inherit" }}
          href="tel:642-60-51"
        >
          <b>942-60-42</b>
        </Anchor>
        <br />
        <Italic>(с 12:00 до 18:00)</Italic>
      </ContactsSection>
      <ContactsSection logoSrc={emailSrc}>
        Адрес эл. почты: <b>vigmamebel@gmail.com</b>
      </ContactsSection>
      <ContactsSection
        logoSrc={locationSrc}
        imgProps={{
          style: { transform: "rotate(5deg)" },
        }}
      >
        Адрес производства: <br />
        <b>г. Санкт-Петербург, ул. Автобусная, д. 3</b>
      </ContactsSection>
      <ContactsSection close={true} logoSrc={timeSrc}>
        График работы: <b>с 9:30 до 20:00</b> <br />
      </ContactsSection>
      <ContactsSection logoSrc={directorSrc}>
        Главный менеджер: <b>Филатов Михаил Юрьевич</b>
      </ContactsSection>
    </Content>
  );
};

export default ContactsContent;

const phoneSrc = "/contact/phone.svg";
const emailSrc = "/contact/email.svg";
const locationSrc = "/contact/location.svg";
const timeSrc = "/contact/time.svg";
const directorSrc = "/contact/director.svg";

import Anchor from "../ui/Anchor";
import Content from "../layout/Content";
import ContactsSection from "./ContactsSection";
import Italic from "../ui/Italic";
import classes from "./ContactsContent.module.css";

const ContactsContent = (props) => {
  return (
    <Content className={classes.ContactsContent}>
      <ContactsSection
        logoSrc={phoneSrc}
        imgProps={{
          style: { height: "3rem", width: "auto", bottom: "-10px" },
        }}
        contactKey="Номер телефона:"
      >
        <a
          style={{ color: "inherit", fontSize: "inherit", fontStyle: "normal" }}
          tabIndex="1"
          href="tel:+7 (812) 642 60-51"
        >
          <b>+7 (812) 642 60-51</b>
        </a>
        <br />
      </ContactsSection>
      <ContactsSection
        contactKey="Адрес эл. почты:"
        logoSrc={emailSrc}
        imgProps={{ style: { width: "2.5rem", height: "auto" } }}
      >
        <a href="mailto:vigmaspb@gmail.com">
          <b>vigmaspb@gmail.com</b>
        </a>
      </ContactsSection>
      <ContactsSection
        logoSrc={locationSrc}
        imgProps={{
          style: {
            transform: "rotate(5deg) scaleX(-1)",
            bottom: "-15px",
            height: "2.5rem",
          },
        }}
        contactKey="Адрес производства:"
      >
        <br />
        <b>
          <span>г. Санкт-Петербург,</span> <span>ул. Автобусная,</span>{" "}
          <span>д. 3,</span> <span>лит. Б</span>
        </b>
      </ContactsSection>
      <ContactsSection
        close={true}
        contactKey="График приёма:"
        imgProps={{
          style: { left: "-25px" },
        }}
        logoSrc={timeSrc}
      >
        <b>с 9:30 до 20:00 </b>
        <Italic style={{ marginLeft: "5px" }}>(по договорённости)</Italic>
      </ContactsSection>
      <ContactsSection
        contactKey="Имя менеджера:"
        logoSrc={directorSrc}
        imgProps={{
          style: { width: "2.5rem", height: "auto", bottom: "-15px" },
        }}
      >
        <b>Филатова Галина Михайловна</b>
      </ContactsSection>
    </Content>
  );
};

export default ContactsContent;

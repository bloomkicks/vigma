import { contactsAssetsPath } from "../../data/general/assets-paths";
const phoneSrc = contactsAssetsPath + "/phone.svg";
const emailSrc = contactsAssetsPath + "/email.svg";
const locationSrc = contactsAssetsPath + "/location.svg";
const timeSrc = contactsAssetsPath + "/time.svg";
const directorSrc = contactsAssetsPath + "/director.svg";

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
        <Anchor tabIndex="1" href="tel:+7 (812) 642 60-51">
          <b>+7 (812) 642 60-51</b>
        </Anchor>
        <p>
          WhatsApp:{" "}
          <Anchor tabIndex="1" href="tel:+7 (812) 642 60-51">
            <b>+7 (964) 342 60-51</b>
          </Anchor>
        </p>

        <br />
      </ContactsSection>
      <ContactsSection
        contactKey="Адрес эл. почты:"
        logoSrc={emailSrc}
        imgProps={{
          style: { width: "2.5rem", height: "auto", left: "-40%" },
        }}
      >
        <Anchor href="mailto:vigmaspb@gmail.com">
          <b>vigmaspb@gmail.com</b>
        </Anchor>
      </ContactsSection>
      <ContactsSection
        logoSrc={locationSrc}
        imgProps={{
          style: {
            transform: "scaleX(-1)",
            bottom: "-15px",
            left: "-20%",
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
          style: { width: "2.5rem", height: "auto", bottom: "-5px" },
        }}
      >
        <b>Филатова Галина Михайловна</b>
      </ContactsSection>
    </Content>
  );
};

export default ContactsContent;

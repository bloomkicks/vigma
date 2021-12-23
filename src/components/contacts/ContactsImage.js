import imgSrc from "../../assets/contact/assistant.jpg";
import classes from "./ContactsImage.module.css";

const ContactsImage = (props) => {
  return (
    <img className={classes.ContactsImage} src={imgSrc} alt="Ассистент" />
  );
};

export default ContactsImage;

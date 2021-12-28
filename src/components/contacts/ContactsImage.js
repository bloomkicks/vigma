import Image from '../layout/Image'
import imgSrc from "../../assets/contact/assistant.jpg";
import classes from "./ContactsImage.module.css";

const ContactsImage = (props) => {
  return (
    <Image
      containerClassName={classes.ContactsImage}
      src={imgSrc}
      alt="Ассистент"
    />
  );
};

export default ContactsImage;

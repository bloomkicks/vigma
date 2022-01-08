import AsideImage from '../layout/AsideImage'
import classes from "./ContactsImage.module.css";

const ContactsImage = (props) => {
  return (
    <AsideImage
      className={classes.ContactsImage}
      src={"/contact/assistant.jpeg"}
      alt=""
    />
  );
};

export default ContactsImage;

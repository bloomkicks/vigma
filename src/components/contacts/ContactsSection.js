import Section from "../ui/Section";
import classes from "./ContactsSection.module.css";

const ContactsSection = (props) => {
  const { contactKey, logoSrc, children, imgProps, ...sectionProps } = props;

  return (
    <Section {...sectionProps} className={classes.ContactsSection}>
      <span className={classes.Text}>
        <span className={classes.Key}>
          <img {...imgProps} src={logoSrc} className={classes.Logo} alt="" />
          {contactKey}
        </span>
        {children}
      </span>
    </Section>
  );
};

export default ContactsSection;

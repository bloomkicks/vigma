import Section from '../ui/Section'
import classes from './ContactsSection.module.css'

const ContactsSection = props => {
  const {
    logoSrc,
    children,
    imgProps,
    ...sectionProps
  } = props

  return (
    <Section {...sectionProps} className={classes.ContactsSection} >
      <img {...imgProps} src={logoSrc} className={classes.Logo} />
      <p className={classes.Text}>{children}</p>
    </Section>
  );
}

export default ContactsSection
import Section from "../ui/Section";
import classes from "./AboutUsSection.module.css";

const AboutUsSection = (props) => {
  const { title, children, imgSrc, className, ...sectionProps } = props;

  return (
    <Section 
      {...sectionProps} 
      className={`
        ${classes.AboutUsSection}
        ${className}
      `}
    >
      <div className={classes.Heading}>
        <h2>{title}</h2>
        <img className={classes.Logo} src={imgSrc} />
      </div>
      <p>{children}</p>
    </Section>
  )
};

export default AboutUsSection;

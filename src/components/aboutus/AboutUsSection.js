import Secondary from "../ui/Secondary";
import Section from "../ui/Section";
import Bold from "../ui/Bold";
import classes from "./AboutUsSection.module.scss";

const AboutUsSection = (props) => {
  const { title, children, imgSrc, logoStyle, ...sectionProps } = props;

  return (
    <Section {...sectionProps} className={classes.AboutUsSection}>
      <div className={classes.Heading}>
        <Secondary>{title}</Secondary>
        <img className={classes.Logo} style={logoStyle} src={imgSrc} alt="" />
      </div>
      <p>{children}</p>
    </Section>
  );
};

export default AboutUsSection;

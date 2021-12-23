import servicesSrc from "../../assets/about us/Services.svg";

import AboutUsSection from "./AboutUsSection";
import classes from "./AboutUsContent.module.css";

const AboutUsContent = (props) => {
  return (
    <main>
      <AboutUsSection title="Наши услуги" imgSrc={servicesSrc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        itaque fugiat totam hic nesciunt, earum ab. Officia vero, esse deleniti
        beatae illo voluptas provident natus, suscipit odio, ad dolorum
        delectus.
      </AboutUsSection>
    </main>
  );
};

export default AboutUsContent;

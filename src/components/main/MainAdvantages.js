const packageSvg = process.env.MAIN_ASSETS + "/package.svg";
const rulerSvg = process.env.MAIN_ASSETS + "/ruler.svg";
const gearsSvg = process.env.MAIN_ASSETS + "/gears.svg";

import MainAdvantage from "./MainAdvantage";
import Secondary from "../ui/Secondary";
import Bold from "../ui/Bold";
import Section from "../ui/Section";
import classes from "./MainAdvantages.module.css";

const MainAdvantages = (pros) => {
  return (
    <Section className={classes.Advantages}>
      <Secondary>
        Почему <Bold> выбирают нас</Bold>:
      </Secondary>
      <div>
        <MainAdvantage title="Доставка и установка" logoSrc={packageSvg}>
          У нас быстро и чисто
        </MainAdvantage>
        <MainAdvantage title="Бесплатный дизайн-проект" logoSrc={rulerSvg}>
          У нас красиво и профессиально
        </MainAdvantage>
        <MainAdvantage title="Собственное производство" logoSrc={gearsSvg}>
          У нас доступно и практично
        </MainAdvantage>
      </div>
    </Section>
  );
};

export default MainAdvantages;

const packageSvg = "/main-assets/package.svg";
const rulerSvg = "/main-assets/ruler.svg";
const gearsSvg = "/main-assets/gears.svg";

import MainAdvantage from "./MainAdvantage";
import Secondary from "../ui/Secondary";
import Section from "../ui/Section";
import classes from "./MainAdvantages.module.css";

const MainAdvantages = (pros) => {
  return (
    <Section className={classes.Advantages}>
      <Secondary>Почему выбирают нас</Secondary>
      <div>
        <MainAdvantage title="Собственное производство" logoSrc={gearsSvg}>
          из-за чего цены ниже, чем у конкурентов
        </MainAdvantage>
        <MainAdvantage title="Выезд замерщика" logoSrc={rulerSvg}>
          бесплатный замер и составление проекта
        </MainAdvantage>
        <MainAdvantage title="Доставка и установка" logoSrc={packageSvg}>
          мы осуществляем доставку по СПб и Лен. области
        </MainAdvantage>
      </div>
    </Section>
  );
};

export default MainAdvantages;

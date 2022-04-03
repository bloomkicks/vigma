const packageSvg = "/main-assets/package.svg";
const rulerSvg = "/main-assets/ruler.svg";
const gearsSvg = "/main-assets/gears.svg";

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
        <MainAdvantage
          title="Собственное производство"
          logoSrc={gearsSvg}
          style={{ fontSize: "0.76rem", marginTop: "3px" }}
        >
          Благодаря отсутствию торговых посредников в цепочке поставок, вы
          можете приобрести мебель по доступным ценам
        </MainAdvantage>
        <MainAdvantage title="Выезд дизайнера-замерщика" logoSrc={rulerSvg}>
          Предоставляем дизайн-проект с замером бесплатно
        </MainAdvantage>
        <MainAdvantage title="Доставка" logoSrc={packageSvg}>
          Мы оказываем услуги по доставке в пределах Санкт-Петербурга и ЛО
        </MainAdvantage>
      </div>
    </Section>
  );
};

export default MainAdvantages;

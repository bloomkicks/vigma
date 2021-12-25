import servicesSvg from "../../assets/about us/Services.svg";
import cartSvg from "../../assets/about us/Cart.svg";
import materialsSvg from "../../assets/about us/Materials.svg";
import clockSvg from "../../assets/about us/Clock.svg";
import deliverySvg from "../../assets/about us/Delivery.svg";
import buildingSvg from "../../assets/about us/Building.svg";

import AboutUsSection from "./AboutUsSection";
import classes from "./AboutUsContent.module.css";

const AboutUsContent = (props) => {
  return (
    <main className={classes.AboutUsContent}>
      <AboutUsSection title="Наши услуги" imgSrc={servicesSvg}>
        Мы занимается проектированием, изготовлением и доставкой корпусной
        мебели, специализируясь на нестандартных моделях
      </AboutUsSection>
      <AboutUsSection title="Ассортимент" imgSrc={cartSvg}>
        Мы создаём мебель, полностью соответствующую высоким стандартам качества
      </AboutUsSection>
      <AboutUsSection title="Доставка" imgSrc={deliverySvg}>
        Мы осуществляем доставку в пределах Ленинградской области, но при
        рентабельности заказа готовы работать и на более дальние расстояния
      </AboutUsSection>
      <AboutUsSection title="Материалы" imgSrc={materialsSvg}>
        Мы используем лишь качественные, крепкие и долговченые материалы
      </AboutUsSection>
      <AboutUsSection title="Время" imgSrc={clockSvg}>
        Всю нашу мебель мы делаем тщательно и с любовью в переделах 5-и дней
      </AboutUsSection>
      <AboutUsSection title="Наш салон" imgSrc={buildingSvg}>
        В нашем салоне представлены образцы мебели, а также образцы материалов,
        с которыми мы работаем
      </AboutUsSection>
    </main>
  );
};

export default AboutUsContent;

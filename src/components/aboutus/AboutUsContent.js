import servicesSrc from "../../assets/about us/Services.svg";
import cartSrc from "../../assets/about us/Cart.svg";
import materialsSrc from "../../assets/about us/Materials.svg";
import clockSrc from "../../assets/about us/Clock.svg";
import deliverySrc from "../../assets/about us/Delivery.svg";
import buildingSrc from "../../assets/about us/Building.svg";

import AboutUsSection from "./AboutUsSection";
import Content from '../layout/Content'
import classes from "./AboutUsContent.module.css";

const aboutUsSections = [
  {
    imgSrc: servicesSrc,
    title: 'Услуги',
    children: 'Мы занимается проектированием, изготовлением и доставкой корпусной мебели на заказ, специализируясь на нестандартных моделях'
  },
  {
    imgSrc: cartSrc,
    title: 'Ассортимент',
    children: 'Мы готовы изготовить любую корпусную мебель для дома, квартиры, офиса, торговых организаций и др.',
    logoStyle: {
      width: '4rem'
    },
  },
  {
    imgSrc: deliverySrc,
    title: 'Доставка',
    children: 'Мы осуществляем доставку в пределах Санкт-Петербурга и Лен. области , но при рентабельности заказа готовы работать и на более дальние расстояния',
    logoStyle: {
      width: '4rem'
    },
  },
  {
    imgSrc: materialsSrc,
    title: 'Материалы',
    children: 'При изготовлении мебели мы используем лишь качественные, крепкие материалы, соответствующие ГОСТу'
  },
  {
    imgSrc: clockSrc,
    title: 'Время',
    children: 'Сроки готовности корпусной мебели укладываются в период от 5 до 15 дней, в зависимости от сложности заказа'
  },
  {
    imgSrc: buildingSrc,
    title: 'Наш салон',
    children: 'В нашем салоне представлены образцы мебели, а также образцы материалов, с которыми мы работаем'
  },
]

const AboutUsContent = (props) => {
  return (
    <Content className={classes.AboutUsContent}>
      {aboutUsSections.map(section => {
        return <AboutUsSection {...section} />
      })}
    </Content>
  );
};

export default AboutUsContent;

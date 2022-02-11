const servicesSrc = "/about us/Services.svg";
const cartSrc = "/about us/Cart.svg";
const materialsSrc = "/about us/Materials.svg";
const clockSrc = "/about us/Clock.svg";
const deliverySrc = "/about us/Delivery.svg";
const buildingSrc = "/about us/Building.svg";

import AboutUsSection from "./AboutUsSection";
import Content from '../layout/Content'
import classes from "./AboutUsContent.module.css";

const aboutUsSections = [
  {
    imgSrc: servicesSrc,
    title: 'Услуги',
    children: 'Мы занимаемся изготовлением, сборкой, распилом, доставкой и установкой корпусной мебели на заказ'
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
    children: 'Мы изготавливаем мебель от 3 дней, в зависимости от сложности заказа'
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
        return <AboutUsSection {...section} key={Math.random()} />
      })}
    </Content>
  );
};

export default AboutUsContent;

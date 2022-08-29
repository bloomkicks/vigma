import { aboutsUsAssetsPath } from "../../data/general/assets-paths";

const servicesSrc = aboutsUsAssetsPath + "/Services.svg";
const cartSrc = aboutsUsAssetsPath + "/Cart.svg";
const materialsSrc = aboutsUsAssetsPath + "/Materials.svg";
const clockSrc = aboutsUsAssetsPath + "/Clock.svg";
const deliverySrc = aboutsUsAssetsPath + "/Delivery.svg";
const buildingSrc = aboutsUsAssetsPath + "/Building.svg";

import AboutUsSection from "./AboutUsSection";
import Content from "../layout/Content";
import classes from "./AboutUsContent.module.css";

const aboutUsSections = [
  {
    imgSrc: servicesSrc,
    title: "Услуги",
    children:
      "Мы занимаемся изготовлением, сборкой, распилом, доставкой и установкой корпусной мебели на заказ",
  },
  {
    imgSrc: cartSrc,
    title: "Ассортимент",
    children:
      "Мы готовы изготовить любую корпусную мебель для дома, квартиры, офиса, торговых организаций и др.",
    logoStyle: {
      width: "4rem",
    },
  },
  {
    imgSrc: deliverySrc,
    title: "Доставка",
    children:
      "Мы осуществляем доставку в пределах Санкт-Петербурга и Лен. области , но при рентабельности заказа готовы работать и на более дальние расстояния",
    logoStyle: {
      width: "4rem",
    },
  },
  {
    imgSrc: materialsSrc,
    title: "Материалы",
    children:
      "При изготовлении мебели мы используем лишь качественные, крепкие материалы, соответствующие ГОСТу",
  },
  {
    imgSrc: clockSrc,
    title: "Время",
    children:
      "Мы изготавливаем мебель от 3 до 20 рабочих дней, в зависимости от сложности заказа",
  },
  {
    imgSrc: buildingSrc,
    title: "Наше производство",
    children:
      "Собственное автоматизированное производство с новым оборудованием. Здесь мы производим мебель «под ключ» от эскизов до сборки",
  },
];

const AboutUsContent = (props) => {
  return (
    <Content className={classes.AboutUsContent}>
      {aboutUsSections.map((section) => {
        return <AboutUsSection {...section} key={Math.random()} />;
      })}
    </Content>
  );
};

export default AboutUsContent;

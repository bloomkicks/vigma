import OrderButton from "./OrderButton";
import Section from "../ui/Section";
import Title from "../ui/Title";
import Bold from "../ui/Bold";
import classes from "./MainContent.module.css";

const MainContent = (props) => {
  return (
    <main className={classes.MainContent}>
      <Title>
        VIGMA изменит ваш интерьер и <br />
        <Bold>вашу жизнь</Bold>
      </Title>
      <Section>
        <div>
          Интерьер дома очень важен, ведь именно он формирует
          <Bold> атмосферу</Bold> и <Bold>уют</Bold> и влияет на{" "}
          <Bold>настроение</Bold> и <Bold>продуктивность</Bold>
        </div>
        <div>
          Мы проектируем, изготовляем и доставляем мебель, чтобы заполнить{" "}
          <Bold>внутренний мир</Bold> вашего дома!
        </div>
        <div>
          У нас вы можете заказать от простого дивана до целой кухни, и мы
          выполним ваш заказ <Bold>быстро</Bold>, <Bold>качественно</Bold> и{" "}
          <Bold>на века</Bold>
        </div>
      </Section>
      <Section>
        <div>
          Пройдите простой опрос, чтобы мы поняли какую мебель вы хотите, и мы
          изготовим ее в промежуток от 5-и дней
        </div>
        <div className={classes.close}>
          Замер и составление проекта - <Bold>бесплатно</Bold>
        </div>
      </Section>
      <Section>
        <OrderButton />
      </Section>
    </main>
  );
};

export default MainContent;

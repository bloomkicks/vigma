import MainAdvantages from "./MainAdvantages";
import OrderButton from "./OrderButton";
import Content from "../layout/Content";
import Section from "../ui/Section";
import Anchor from "../ui/Anchor";
import Title from "../ui/Title";
import Bold from "../ui/Bold";
import classes from "./MainContent.module.css";

const MainContent = (props) => {
  return (
    <Content className={classes.MainContent}>
      <Title>
        Качественная мебель на заказ <Bold>быстро</Bold> и <Bold>недорого</Bold>
        !
      </Title>
      <Section close={true}>
        <div>
          У нас вы можете заказать любую корпусную мебель, и мы изготовим её
          согласно высоким стандартам качества. <br />
          <Anchor href="/about-us">Подробнее о нас...</Anchor>
        </div>
      </Section>
      <MainAdvantages />
      <Section>
        <div>
          Пройдите простой опрос, чтобы мы поняли какая мебель подойдет вам
          лучше или договоритесь <Anchor href="/contacts">по телефону</Anchor>
        </div>
      </Section>
      <OrderButton />
    </Content>
  );
};

export default MainContent;

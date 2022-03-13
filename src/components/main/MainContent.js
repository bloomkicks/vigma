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
        Производим корпусную мебель на заказ в <Bold>СПб</Bold> и <Bold>Лен. области</Bold>
      </Title>
      <MainAdvantages />
      <Section>
        <p>
          Пройдите простой опрос или{" "}
          <span className={classes.onPhone}>
            договоритесь <Anchor href="/contacts">по телефону</Anchor>
          </span>
        </p>
      </Section>
      <OrderButton />
    </Content>
  );
};

export default MainContent;

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
        создадим мебель по <Bold>индивидуальному</Bold> проекту в
        Санкт-Петербурге и ЛО
      </Title>
      <MainAdvantages />
      <Section>
        <h4>
          ЕСТЬ ВОПРОС?{" "}
          <span className={classes.onPhone}>
            - Задайте его <Anchor href="/contacts">по телефону</Anchor>
          </span>
        </h4>
      </Section>
      <OrderButton />
    </Content>
  );
};

export default MainContent;

import Link from 'next/link'
import MainWork from "./MainWork";
import MainAdvantages from "./MainAdvantages";
import OrderButton from "./OrderButton";
import Content from "../layout/Content";
import Anchor from "../ui/Anchor";
import Title from "../ui/Title";
import Bold from "../ui/Bold";
import classes from "./MainContent.module.scss";

const MainContent = (props) => {
  return (
    <Content className={classes.MainContent}>
      <Title>
        создадим <span className="block"> мебель по</span>{" "}
        <Bold>индивидуальному</Bold> проекту в{" "}
        <span className="block">Санкт-Петербурге</span> и Лен. области
      </Title>
      <MainAdvantages />
      <section>
        <h4>
          Есть вопрос?{" "}
          <span className={classes.onPhone}>
            - Мы с радостью ответим вам{" "}
            <Anchor href="/contacts">по телефону</Anchor>
          </span>
        </h4>
      </section>
      <OrderButton />
      <MainWork />
      <Link passHref href="/works">
        <p tabIndex={20}>Больше наших работ</p>
      </Link>
    </Content>
  );
};

export default MainContent;

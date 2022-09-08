import Box from "@mui/material/Box";
import Link from "next/link";
import MainWork from "./MainWork";
import MainAdvantages from "./MainAdvantages";
import OrderButton from "./OrderButton";
import Content from "../layout/Content";
import Title from "../ui/Title";
import Secondary from "../ui/Secondary";
import Bold from "../ui/Bold";
import classes from "./MainContent.module.scss";

const MainContent = (props) => {
  return (
    <Content className={classes.MainContent}>
      <Title>
        делаем <Bold>качественную</Bold>{" "}
        <span className="block">мебель по</span> <Bold>индивидуальному</Bold>{" "}
        проекту
      </Title>
      <MainAdvantages />
      <Box component="section" sx={{ marginTop: 2.5 }}>
        <h3 style={{ fontWeight: 400 }}>
          Рассчитайте стоимость и получите <Bold>подарок</Bold>
        </h3>
      </Box>
      <OrderButton />
      <Secondary>Закончились идеи? Посмотрите уже готовые работы</Secondary>
      <MainWork />
      <Link passHref href="/works">
        <a className={classes.MoreWorks}>Больше наших работ</a>
      </Link>
    </Content>
  );
};

export default MainContent;

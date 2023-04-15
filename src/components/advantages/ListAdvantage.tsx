import Advantage from "./Advantage";
import Grid from "@mui/material/Grid";

let advantages = [
  {
    title: "Наше производство",
    description:
      "Собственное производство позволяет снизить цену кухни на 10% благодаря экономии на посредниках",
    imgName: "saw.png",
  },
  {
    title: "Работа по договору",
    description:
      "Соблюдение сроков и условий договора очень важно для нас. Средний срок изготовления кухни за 2022 год — 14 дней",
    imgName: "contract.png",
  },
  {
    title: "Опытные мастера",
    description:
      "У нас работают мастера своего дела с опытом изготовления кухонь более 10 лет",
    imgName: "tools.png",
  },
  {
    title: "Качественные материалы",
    description:
      "1000+ видов материала, цвета и фактуры на любой вкус. Все материалы сертифицированы",
    imgName: "materials.png",
  },
  {
    title: "Подключение техники",
    description:
      "Бесплатная установка техники на кухне (плита, холодильник, посудомоечная машина и др.)",
    imgName: "dishwasher.png",
  },
  {
    title: "Доставка и установка",
    description:
      "Осуществляем доставку и установку по всему Санкт-Петербургу и Лен. области",
    imgName: "package.png",
  },
];

const ListAdvantage = ({ sx }: { sx?: any }) => {
  return (
    <Grid
      container
      columnSpacing={{ xs: 0, md: 2, lg: 5 }}
      rowSpacing={{ xs: 4, md: 5 }}
      justifyContent="center"
      alignItems="flex-start"
      sx={sx}
    >
      {advantages.map((advantage) => (
        <Grid item xs={12} md={6} key={advantage.imgName}>
          <Advantage
            title={advantage.title}
            description={advantage.description}
            imgSrc={`${process.env.ADVANTAGES_ASSETS}/${advantage.imgName}`}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListAdvantage;

import Advantage from "./Advantage";
import Grid from "@mui/material/Grid";

let advantages = [
  {
    title: "Своё производство",
    description:
      "Собственное производство позволяет снизить стоимость кухни на 10% благодаря отсутствию посредников",
    imgName: "saw.png",
  },
  {
    title: "Работа по договору",
    description:
      "Соблюдение сроков и условий договора очень важно для нас. Мы даем гарантию 3 года на все кухни",
    imgName: "contract.png",
  },
  {
    title: "Опытные мастера",
    description:
      "У нас работают мастера своего дела с опытом изготовления кухонь более 5 лет",
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
      "Бесплатное подключение кухонной техники (плита, холодильник, посудомоечная машина и др.)",
    imgName: "dishwasher.png",
  },
  {
    title: "Доставка и установка",
    description:
      "Осуществляем доставку и установку по всему Санкт-Петербургу и Лен. области",
    imgName: "package.png",
  },
];

const AdvantageList = ({ sx }: { sx?: any }) => {
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

export default AdvantageList;

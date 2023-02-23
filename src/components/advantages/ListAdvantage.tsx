import Advantage from "./Advantage";
import Grid from "@mui/material/Grid";

let advantages = [
  {
    title: "Собственное производство",
    description:
      "Вся продукция производится на современном оборудовании. Средний срок изготовления мебели за 2022 год — 10 дней",
    imgName: "saw.png",
  },
  {
    title: "Работа по договору",
    description:
      "Расчёт принимается частями: по карте, наличными или через расчетный счёт",
    imgName: "contract.png",
  },
  {
    title: "Опытные мастера",
    description:
      "Сотрудниками компании являются русские специалисты и мастера своего дела с опытом более 10 лет",
    imgName: "tools.png",
  },
  {
    title: "Качественные материалы",
    description:
      "Предлагаем более 1000 видов материала, цвета, фактуры и текстуры на любой вкус. Все материалы сертифицированы",
    imgName: "materials.png",
  },
  {
    title: "Доставка и установка",
    description: "Доставка по Санкт-Петербургу и Лен. области в короткие сроки",
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

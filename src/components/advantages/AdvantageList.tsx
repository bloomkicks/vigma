import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

let advantages = [
  {
    title: "Собственное производство",
    description:
      "Своё производство позволяет значительно ускорить процесс изготовления мебели и снизить цены на нашу продукцию",
  },
  {
    title: "Соверменные технологии",
    description:
      "Вся продукция производится на новом современном оборудовании с использованием полимерных материалов российского и зарубежного производства",
  },
  {
    title: "Качественные материалы",
    description:
      "Более 300 вариантов видов материала, цветов, фактур и текстур. Все материалы сертифицированы",
  },
  {
    title: "Работа по договору",
    description:
      "Расчёт принимается частями с карты, наличными или через расчетный счёт",
  },
  {
    title: "Компетенция",
    description:
      "Накопленный многолетний опыт позволяет учесть при проектировании кухни все скрытые особенности в помещении заказчика",
  },
];

const AdvantageList = ({ sx }: { sx?: any }) => {
  return (
    <Stack spacing={4} sx={sx}>
      {advantages.map((advantage) => (
        <Box textAlign="left" key={advantage.title}>
          <Typography variant="h3" mb={0.75}>
            {advantage.title}
          </Typography>
          <Typography component="p" variant="body2">
            {advantage.description}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default AdvantageList;

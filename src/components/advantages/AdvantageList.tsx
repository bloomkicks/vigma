import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

let advantages = [
  {
    title: "Собственное производство",
    description:
      "Вся продукция производится на современном оборудовании. Средний срок изготовления мебели за 2022 год — 10 дней",
    imgName: "design.png",
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
    imgName: "case.png",
  },
  {
    title: "Качественные материалы",
    description:
      "Предлагаем более 1000 видов материала, цвета, фактуры и текстуры на любой вкус. Используем только сертифицированные материалы класса Е1 — российский стандарт",
    imgName: "materials.png",
  },
  {
    title: "Доставка и установка",
    description: "Доставка по Санкт-Петербургу и Лен. области в короткие сроки",
    imgName: "delivery.png",
  },
];

const AdvantageList = ({ sx }: { sx?: any }) => {
  return (
    <Stack spacing={4} sx={sx} pl={{ lg: 16 }}>
      {advantages.map((advantage) => (
        <Box
          py={{ xs: 0.5, md: 0 }}
          textAlign="left"
          height="100%"
          position="relative"
          key={advantage.title}
        >
          <Box
            component="img"
            alt=""
            src={`${process.env.ADVANTAGES_ASSETS}/${advantage.imgName}`}
            width={advantage.imgName.includes("contract") ? 78 : 85}
            position="absolute"
            display={{ xs: "block", md: "none" }}
            ml="auto"
            sx={{
              opacity: 0.15,
              right: 0,
              bottom: advantage.imgName.includes("case") ? -8 : 0,
            }}
          ></Box>
          <Typography variant="h3" mb={0.6} position="relative">
            {advantage.title}
          </Typography>
          <Typography component="p" variant="body2" position="relative" pr={2}>
            {advantage.description}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default AdvantageList;

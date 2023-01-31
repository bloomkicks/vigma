import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

let advantages = [
  {
    title: "Собственное Производство",
    description:
      "Собственное производство позволяет снизить цену на нашу мебель",
  },
  {
    title: "Бесплатный Дизайн-Проект",
    description:
      "Дизайн-проект поможет найти оптимальное решение для вашего интерьера",
  },
  {
    title: "Современное Оборудование",
    description:
      "Мы используем современные технологии для улучшения качества выпускаемой продукции",
  },
  {
    title: "Доставка и Установка",
    description:
      "Мы осуществляем доставку по всему Санкт-Петербургу и Лен. области",
  },
  {
    title: "Репутация",
    description:
      "Готовность принимать участие по незапланированным вопросам заказчика, возникшим в ходе работы",
  },
];

const AdvantageList = ({ sx }: { sx?: any }) => {
  return (
    <Stack spacing={4} sx={sx}>
      {advantages.map((advantage) => (
        <Box textAlign="left" key={advantage.title}>
          <Typography variant="h3" mb={1.25}>
            {advantage.title}
          </Typography>
          <Typography component="p" variant="subtitle2">
            {advantage.description}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default AdvantageList;

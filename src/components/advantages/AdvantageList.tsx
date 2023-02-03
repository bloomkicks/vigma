import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

let advantages = [
  {
    title: "Собственное Производство",
    description:
      "Собственное производство позволяет сократить расходы и снизить цены на нашу мебель",
  },
  {
    title: "Бесплатный Дизайн-Проект",
    description:
      "Дизайн-проект поможет вам найти оптимальное решение для вашего интерьера",
  },
  {
    title: "Доставка и Установка",
    description:
      "Мы предлагаем услуги доставки и установки по всему Санкт-Петербургу и Лен. области",
  },
  {
    title: "Репутация",
    description:
      "Готовность принимать участие по незапланированным вопросам заказчика укрепляет партнерские отношения и нашу деловую репутацию",
  },
  {
    title: "Современное Оборудование",
    description:
      "Мы используем новейшие технологии для улучшения качества выпускаемой продукции",
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

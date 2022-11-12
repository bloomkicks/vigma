import ItemAdvantage from "./ItemAdvantage";
import Stack from "@mui/material/Stack";

let advantages = [
  {
    title: "Опытные Мастера",
    description:
      "Наши мастера изготавливают качественную мебель в короткие сроки",
  },
  {
    title: "Современное Оборудование",
    description:
      "Мы используем новейшие технологии для изготавления лучшей мебели",
  },
  {
    title: "Своё Производство",
    description:
      "Собственное производство позволяет сократить траты на посредников",
  },
  {
    title: "Доставка и Установка",
    description:
      "Мы осуществляем доставку по всему Санкт-Петербургу и Лен. области",
  },
  {
    title: "Бесплатный Дизайн-Проект",
    description:
      "Дизайн-проект поможет найти оптимальное решение для вашего интерьера",
  },
];

const ListAdvantage = ({ sx }: { sx?: any }) => {
  return (
    <Stack spacing={5} sx={sx}>
      {advantages.map((advantage) => (
        <ItemAdvantage {...advantage} key={advantage.title} />
      ))}
    </Stack>
  );
};

export default ListAdvantage;

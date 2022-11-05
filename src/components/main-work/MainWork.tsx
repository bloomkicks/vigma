import type { WorkProps } from "../../types/works";
import Work from "../works/work/Work";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// LATTE KITCHEN
const latteKitchenMain = "latte/main.jpeg";
const latteKitchenAngle = "latte/angle.jpeg";
const latteKitchenFar = "latte/far.jpeg";

let work: WorkProps = {
  images: [
    {
      src: latteKitchenMain,
    },
    {
      src: latteKitchenAngle,
      isVertical: true,
    },
    {
      src: latteKitchenFar,
      isVertical: true,
    },
  ],
  info: {
    title: 'Кухня "Латте" Прямая',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada ex ut tellus eleifend, vel fermentum nisl lacinia",
    properties: [
      { property: "Габариты", value: "3000x500x2400" },
      { property: "Корпус", value: "ЛДСП Влагостойкий" },
      { property: "Фасад", value: "МДФ Пластик" },
      { property: "Фурнитура", value: "Hettich" },
      { property: "Столешница", value: "ДСП Пластик Троя" },
    ],
    price: "38651",
    colors: ["#cdcbcc", "#7d665e"],
  },
};

const MainWork = () => {
  return (
    <Box component="article" id="work">
      <Typography variant="h2">Пример работы</Typography>
      <Work {...work} />
    </Box>
  );
};

export default MainWork;

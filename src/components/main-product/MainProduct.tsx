import type { ProductProps } from "../../types/products";
import Product from "../catalog/product/Index";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinkToCatalog from "./LinkToCatalog";

const solidKitchenAngleMain = "solid/angle_main.jpeg";
const solidKitchenAngle2 = "solid/angle2.jpeg";
const solidKitchenMain = "solid/main.jpeg";

let product: ProductProps = {
  // SOLID
  images: [
    {
      src: solidKitchenAngleMain,
    },
    {
      src: solidKitchenAngle2,
      isVertical: true,
    },
    {
      src: solidKitchenMain,
      isVertical: true,
    },
  ],
  info: {
    title: 'Кухня "Солид" Угловая',
    properties: [
      { property: "Габариты", value: "4200x2420x600" },
      { property: "Корпус", value: "ЛДСП Влагостойкий" },
      { property: "Фасад", value: "МДФ Эмаль" },
      { property: "Фурнитура", value: "Hettich" },
      { property: "Столешница", value: "Пластик" },
    ],
    price: "34376",
    colors: [
      "#746d71",
      "repeating-linear-gradient(90deg, #733617, #965632 3px)",
    ],
  },
};
const MainProduct = () => {
  return (
    <Box component="article" id="product">
      <Typography variant="h2">Пример нашей работы</Typography>
      <Product {...product} />
      <LinkToCatalog />
    </Box>
  );
};

export default MainProduct;

import type { ProductProps } from "../../types/products";
import Product from "../catalog/product/Index";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinkToCatalog from "./LinkToCatalog";

// LATTE KITCHEN
const latteKitchenMain = "latte/main.jpeg";
const latteKitchenAngle = "latte/angle.jpeg";
const latteKitchenFar = "latte/far.jpeg";

let product: ProductProps = {
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

const MainProduct = () => {
  return (
    <Box component="article" id="product">
      <Typography variant="h2">Пример работы</Typography>
      <Product {...product} />
      <LinkToCatalog />
    </Box>
  );
};

export default MainProduct;

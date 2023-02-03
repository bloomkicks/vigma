import type { ProductProps } from "../../types/products";
import Product from "../catalog/product/Product";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinkToCatalog from "./LinkToCatalog";

const winterKitchenFullsize = "winter/fullsize.jpg";
const winterKitchenBottom = "winter/bottom.jpg";
const winterKitchenTop = "winter/top.jpg";

let product: ProductProps = {
  // WINTER
  images: [
    {
      src: winterKitchenFullsize,
    },
    {
      src: winterKitchenBottom,
    },
    {
      src: winterKitchenTop,
    },
  ],
  info: {
    title: 'Кухня "Винтер" Прямая',
    colors: ["#E4E9E5", "#84847A", "#E8C399"],
    properties: [
      { property: "Габариты", value: "2400x600x2100" },
      { property: "Корпус", value: "ЛДСП Влагостойкий" },
      { property: "Фасад", value: "МДФ" },
      { property: "Фурнитура", value: "Boyard (Китай)" },
    ],
    price: "28400",
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

import Grid from "@mui/material/Grid";
import type { ProductProps } from "../../types/products";
import Product from "../catalog/product/Product";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import LinkToCatalog from "./LinkToCatalog";

// SOLID KITCHEN
const solidKitchenAngleMain = "solid/angle_main.jpeg";
const solidKitchenAngle2 = "solid/angle2.jpeg";
const solidKitchenMain = "solid/main.jpeg";
// BARHAT KITCHEN
const barhatKitchenFullsize = "barhat/fullsize.jpg";
const barhatKitchenAngled = "barhat/angled.jpg";
const barhatKitchenZoomed = "barhat/zoomed.jpg";
// MODERN KITCHEN
const modernKitchenFullsize = "modern/fullsize.jpg";
const modernKitchenAngled = "modern/angled.jpg";
const modernKitchenZoomed = "modern/zoomed.jpg";

let products: ProductProps[] = [
  {
    // BARHAT
    images: [
      {
        src: barhatKitchenFullsize,
      },
      {
        src: barhatKitchenAngled,
      },
      {
        src: barhatKitchenZoomed,
      },
    ],
    info: {
      title: 'Кухня "Бархарт" Прямая',
      colors: ["#0C0C0C", "#4A494F", "#514039"],
      properties: [
        { property: "Габариты", value: "2400x600x2100" },
        { property: "Корпус", value: "ЛДСП Влагостойкий" },
        { property: "Фасад", value: "МДФ" },
        { property: "Фурнитура", value: "Ettich" },
      ],
      price: "28400",
    },
  },
  {
    // SOLID
    images: [
      {
        src: solidKitchenMain,
        isVertical: true,
      },
      {
        src: solidKitchenAngle2,
        isVertical: true,
      },
      {
        src: solidKitchenAngleMain,
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
  },
  {
    // MODERN
    images: [
      {
        src: modernKitchenFullsize,
      },
      {
        src: modernKitchenAngled,
      },
      {
        src: modernKitchenZoomed,
      },
    ],
    info: {
      title: 'Кухня "Модерн" с Островком',
      colors: ["#1D1D1D", "#9C876C"],
      properties: [
        { property: "Габариты", value: "2300x700x2100" },
        { property: "Корпус", value: "ЛДСП Влагостойкий" },
        { property: "Фасад", value: "МДФ" },
        { property: "Фурнитура", value: "Boyard (Китай)" },
      ],
      price: "28400",
    },
  },
];

const SectionMainProducts = () => {
  return (
    <Box component="article" id="products">
      <Typography variant="h2">Примеры наших проектов</Typography>
      <Grid
        container
        spacing={4}
        rowSpacing={{ xs: 4, md: 3 }}
        justifyContent="center"
        alignItems="flex-start"
        px={{ xs: 1, md: 2, lg: 7 }}
      >
        {products.map((product) => (
          <Product {...product} key={product.info.title} />
        ))}
      </Grid>
      <LinkToCatalog />
    </Box>
  );
};

export default SectionMainProducts;

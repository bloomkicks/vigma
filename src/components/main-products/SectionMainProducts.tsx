import Grid from "@mui/material/Grid";
import Product from "../catalog/product/Product";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinkToCatalog from "./LinkToCatalog";
import { mainProducts } from "../../data/products";

const SectionMainProducts = () => {
  return (
    <Box component="article" id="products">
      <Typography variant="h2">Наши проекты</Typography>
      <Grid
        container
        spacing={4}
        rowSpacing={{ xs: 4, md: 3 }}
        justifyContent="center"
        alignItems="flex-start"
        px={{ xs: 1, md: 2, lg: 7 }}
      >
        {mainProducts.map((product) => (
          <Product {...product} key={product.info.title} />
        ))}
      </Grid>
      <LinkToCatalog />
    </Box>
  );
};

export default SectionMainProducts;

import Grid from "@mui/material/Grid";
import Product from "../../pages/catalog/product/Product";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinkToCatalog from "./LinkToCatalog";
import { mainProducts } from "../../../data/products";

const SectionProducts = () => {
  return (
    <Box component="article" id="products">
      <Grid
        container
        spacing={{ xs: 0, md: 3 }}
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

export default SectionProducts;

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Product from "./product/Product";
import products from "../../data/products";

const ProductList = () => {
  return (
    <>
      <Typography
        variant="h2"
        mt={6}
        mb={{ xs: 4, md: 5 }}
        sx={{ textAlign: "center" }}
      >
        Каталог Кухонь
      </Typography>
      <Grid
        container
        component="main"
        columnSpacing={{ xs: 0, sm: 4 }}
        rowSpacing={4}
        justifyContent="center"
        px={{ xs: 1, md: 2, lg: 7 }}
        alignItems="flex-start"
        maxWidth={{ xs: "100%", md: 1366 }}
        mx="auto"
      >
        {products.map((product) => (
          <>
            <Product {...product} key={product.info.title} />
          </>
        ))}
      </Grid>
    </>
  );
};

export default ProductList;

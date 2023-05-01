import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Product from "./product/Product";
import products from "../../../data/products";

const ProductList = () => {
  return (
    <>
      <Grid
        container
        component="article"
        columnSpacing={{ xs: 0, sm: 3 }}
        rowSpacing={4}
        justifyContent="center"
        px={{ xs: 1.85, md: 2, lg: 10, xl: 24 }}
        alignItems="flex-start"
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

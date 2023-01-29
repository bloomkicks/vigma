import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Product from "./product/Index";
import products from "../../data/products";

const ProductList = () => {
  return (
    <>
      <Typography
        variant="h1"
        mt={5}
        mb={{ xs: 4, md: 8 }}
        sx={{ textAlign: "center" }}
      >
        Каталог Кухонь
      </Typography>
      <Stack
        component="main"
        direction="column"
        spacing={7}
        sx={{
          px: { xs: 3, md: 4, lg: 9 },
          alignItems: "center",
          width: "100%",
        }}
      >
        {products.map((product) => (
          <>
            <Product {...product} key={product.info.title} />
            <Divider />
          </>
        ))}
      </Stack>
    </>
  );
};

export default ProductList;

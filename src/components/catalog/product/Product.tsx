import Grid from "@mui/material/Grid";
import type { ProductProps } from "../../../types/products";
import ProductInfo from "./product-info/ProductInfo";
import ImageGroup from "./image-group/ImageGroup";
import Stack from "@mui/material/Stack";

const Product = ({
  info,
  images,
  overrides,
}: ProductProps & { overrides?: any }) => {
  return (
    <Grid item md={6} xs={12} sx={{ maxWidth: { sm: "500px !important" } }}>
      <Stack
        component="section"
        direction={{ xs: "column", md: "column" }}
        justifyContent="center"
        flexWrap="nowrap"
        spacing={{ xs: 1 }}
        mx="auto"
        sx={{
          width: 500,
          maxWidth: "100%",
          // maxWidth: { sm: 600, md: 1920 },
          textAlign: "left",
          bgcolor: "rgba(0,0,0,0.05)",
          boxShadow: "1px 2px 4px rgba(0,0,0,0.4)",
          px: { xs: 1.5, md: 2 },
          py: 4,
          pt: { xs: 1.7, md: 2.1 },
          borderRadius: "4px",
        }}
        {...overrides}
      >
        <ImageGroup
          images={images}
          sx={{
            width: "100%",
            maxWidth: 600,
            height: { xs: 400, md: 500 },
          }}
        />
        <ProductInfo sx={{ width: "100%" }} {...info} />
      </Stack>
    </Grid>
  );
};

export default Product;

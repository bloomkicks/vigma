import Grid from "@mui/material/Grid";
import type { ProductProps } from "../../../../types/products";
import ProductInfo from "./product-info/ProductInfo";
import ImageSlider from "./image-slider/ImageSlider";
import Stack from "@mui/material/Stack";

const Product = ({
  info,
  images,
  overrides,
}: ProductProps & { overrides?: any }) => {
  return (
    <Grid item md={6} xs={12} sx={{ maxWidth: { sm: "450px !important" } }}>
      <Stack
        component="section"
        direction={{ xs: "column", md: "column" }}
        justifyContent="center"
        flexWrap="nowrap"
        mx="auto"
        sx={{
          width: { xs: 340, sm: 370, md: 390 },
          maxWidth: "95%",
          textAlign: "left",
          bgcolor: "rgba(0,0,0,0.02)",
          boxShadow: "1.25px 2.5px 4px rgba(0,0,0,0.28)",
          borderRadius: "14px",
        }}
        {...overrides}
      >
        <ImageSlider images={images} />
        <ProductInfo sx={{ width: "100%" }} {...info} />
      </Stack>
    </Grid>
  );
};

export default Product;
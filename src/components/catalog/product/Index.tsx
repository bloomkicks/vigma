import type { ProductProps } from "../../../types/products";
import ImageGroup from "./image-group/ImageGroup";
import ProductInfo from "./product-info/Index";
import Stack from "@mui/material/Stack";

const Product = ({
  info,
  images,
  overrides,
}: ProductProps & { overrides?: any }) => {
  return (
    <Stack
      component="section"
      direction={{ xs: "column", md: "row" }}
      justifyContent="center"
      flexWrap="nowrap"
      spacing={4}
      sx={{
        width: "100%",
        mx: "auto",
        textAlign: "left",
      }}
      {...overrides}
    >
      <ImageGroup
        images={images}
        sx={{
          width: { xs: "100%", md: "50%" },
          maxWidth: 630,
          height: { xs: 400, md: 550 },
        }}
      />
      <ProductInfo
        {...info}
        sx={{ width: { xs: "100%", md: "48%" }, maxWidth: 630 }}
      />
    </Stack>
  );
};

export default Product;

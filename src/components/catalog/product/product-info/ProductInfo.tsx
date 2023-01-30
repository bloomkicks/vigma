import { useRouter } from "next/router";
import { quizActions } from "../../../../store/quiz";
import { useDispatch } from "react-redux";
import type { ProductInfoProps } from "../../../../types/products";
import Colors from "./Colors";
import Properties from "./Properties";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const ProductInfo = ({
  title,
  description,
  colors,
  properties,
  sx,
}: ProductInfoProps & { sx?: any }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  function orderHandler() {
    dispatch(quizActions.selectProduct(title));
    router.push("/order");
  }

  return (
    <Box position="relative" sx={sx}>
      <Typography
        variant="h4"
        sx={{ textTransform: "uppercase", mb: 0.75, fontWeight: "500" }}
      >
        {title}
      </Typography>
      <Typography component="p" variant="subtitle2" mb={0.5}>
        {description || ""}
      </Typography>
      <Colors colors={colors} />
      <Properties
        properties={properties}
        sx={{ mb: { xs: 4, md: 6 }, display: { xs: "none", md: "flex" } }}
      />
      <Button
        variant="contained"
        sx={{
          lineHeight: { xs: 2.9, md: "61px" },
          borderRadius: "10px",
          display: "flex",
          mx: { xs: "auto", md: 1 },
        }}
        onClick={orderHandler}
      >
        ЗАКАЗАТЬ
      </Button>
    </Box>
  );
};

export default ProductInfo;

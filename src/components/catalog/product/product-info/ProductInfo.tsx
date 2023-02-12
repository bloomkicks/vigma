import { useRouter } from "next/router";
import { quizActions } from "../../../../store/quiz";
import { useDispatch } from "react-redux";
import type { ProductInfoProps } from "../../../../types/products";
import Colors from "./Colors";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const ProductInfo = ({
  title,
  colors,
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
        variant="h3"
        sx={{
          textTransform: "uppercase",
          fontSize: "1.75rem",
          mb: 0.75,
          fontWeight: "500",
        }}
      >
        {title}
      </Typography>
      <Stack direction="row" justifyContent="space-between">
        <Colors colors={colors} />
        <Button
          variant="contained"
          sx={{
            lineHeight: { xs: 2.9, md: "61px" },
            borderRadius: "10px",
            display: "flex",
            mt: 2,
            mr: 0.5,
          }}
          onClick={orderHandler}
        >
          ЗАКАЗАТЬ
        </Button>
      </Stack>
    </Box>
  );
};

export default ProductInfo;

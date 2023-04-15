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
  price,
  sx,
}: ProductInfoProps & { sx?: any }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  function orderHandler() {
    dispatch(quizActions.selectProduct(title));
    router.push("/order");
  }

  return (
    <Box
      sx={{
        px: { xs: 1.5, md: 1.7 },
        // pt: 2.1,
        pt: 1.45,
        pb: { xs: 2.6, md: 3.1 },
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
        border: "1px solid black",
        borderTop: "0 solid black",
        ...sx,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textTransform: "capitalize",
          fontSize: { xs: "2.12rem", md: "1.9rem" },
          fontWeight: "500",
          mb: 1,
        }}
      >
        {title}
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        mb={{ xs: 1.7, md: 2 }}
      >
        <Typography variant="body2" fontSize={{ xs: "1.5rem", sm: "1.3rem" }}>
          от {price} руб.
        </Typography>
        <Colors colors={colors} />
      </Stack>
      <Button
        variant="contained"
        sx={{
          lineHeight: { xs: "42px", md: "48px" },
          fontSize: { xs: "1.3rem", md: "1.15rem" },
          borderRadius: "10px",
          mx: "auto",
          display: "flex",
          px: 3,
        }}
        onClick={orderHandler}
      >
        ХОЧУ ТАКУЮ КУХНЮ
      </Button>
    </Box>
  );
};

export default ProductInfo;

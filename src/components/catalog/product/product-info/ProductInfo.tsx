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
      position="relative"
      sx={{
        px: { xs: 1.5, md: 1.7 },
        pt: 2.1,
        pb: 4,
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
        border: "1px solid black",
        borderTop: "0 solid black",
        ...sx,
      }}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        height="6px"
        width="100%"
        bgcolor="#97dd9e"
        borderBottom="1px solid black"
      ></Box>
      <Typography
        variant="h3"
        sx={{
          textTransform: "capitalize",
          fontSize: "1.9rem",
          fontWeight: "500",
          mb: 0.75,
        }}
      >
        {title}
      </Typography>
      <Stack direction="row" justifyContent="space-between" mb={2.7}>
        <Typography variant="body2">от {price} руб/п. м.</Typography>
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

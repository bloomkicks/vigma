import { useRouter } from "next/router";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch } from "react-redux";
import quizActions from "../../../../../store/quiz-slice";
import type { ProductInfoProps } from "../../../../../types/products";
import ProductPrice from "./ProductPrice";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const ProductInfo = ({
  title,
  price,
  discount,
  sx,
}: ProductInfoProps & { sx?: any }) => {
  const isReallySmall = useMediaQuery("(max-width: 374px)");
  const isSmall = useMediaQuery("(max-width: 386px)");
  const router = useRouter()

  const dispatch = useDispatch();
  function orderHandler() {
    dispatch(quizActions.selectProduct(title));
    router.push('/order')
  }

  return (
    <Box
      sx={{
        px: isSmall ? 2 : 2.25,
        pt: isSmall ? 1.5 : { xs: 1.55, sm: 1.75 },
        pb: { xs: 3.25, md: 3.1 },
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
        border: "1px solid #aaaaaa",
        borderTop: "0 solid #aaaaaa",
        ...sx,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize:
            isReallySmall || isSmall
              ? "1.9rem"
              : { xs: "2.1rem", md: "1.9rem" },
          fontWeight: "400",
          mb: 1,
        }}
      >
        {title}
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px={0.25}
      >
        <ProductPrice
          price={price}
          discount={discount}
          isReallySmall={isReallySmall}
          isSmall={isSmall}
        />
        <Link href="/main#quiz" passHref>
          <Button
            variant="contained"
            onClick={orderHandler}
            sx={{
              fontSize: isReallySmall ? "1.1rem" : "1.15rem",
              ml: "auto",
              py: isReallySmall || isSmall ? 1.25 : 1.5,
              px: isReallySmall ? 2.5 : isSmall ? 3 : 3.5,
              "&:focus": {
                outline: "none",
              },
            }}
          >
            РАССЧИТАТЬ
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default ProductInfo;

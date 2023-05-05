import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const ProductPrice = ({
  price,
  discount = 40,
  isReallySmall,
  isSmall,
}: {
  price: string;
  discount?: number;
  isReallySmall?: boolean;
  isSmall?: boolean;
}) => {
  const oldPrice = parseInt(price) * 1000 + parseInt(price) * discount * 10;

  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        flexWrap="nowrap"
        spacing={{ xs: 1.25, md: 1.5 }}
        mb={0.6}
      >
        <Typography
          variant="body2"
          display="inline-block"
          position="relative"
          sx={{
            fontSize: isReallySmall ? "1.4rem" : isSmall ? "1.45rem" : "1.5rem",
          }}
        >
          {oldPrice}
          <Box
            component="span"
            className="linethrough"
            sx={{
              display: "block",
              position: "absolute",
              top: "50%",
              left: "-1px",
              height: "2px",
              transform: isSmall ? "translateY(-70%)" : "translateY(-100%)",
              width: "104%",
              bgcolor: "text.primary",
              opacity: 0.7,
            }}
          ></Box>
        </Typography>
        <Box
          sx={{
            display: "inline-block",
            bgcolor: "secondary.dark",
            color: "white",
            px: 1,
            py: 0.6,
            position: "relative",
            bottom: 1,
            borderRadius: "5px",
          }}
        >
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", fontSize: "1.25rem" }}
          >
            -{discount}%
          </Typography>
        </Box>
      </Stack>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: isReallySmall || isSmall ? "1.45rem" : "1.55rem",
        }}
      >
        {price}₽{" "}
        <span
          style={{
            fontWeight: "400",
            fontSize: isReallySmall || isSmall ? "1.35rem" : "1.4rem",
          }}
        >
          за п.м.
        </span>
      </Typography>
    </Box>
  );
};

export default ProductPrice;

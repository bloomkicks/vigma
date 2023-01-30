import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "./Rating";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import type { Review } from "../../types/reviews";

const ItemReview = ({
  title,
  rating,
  text,
  imgSrc,
  sx,
}: Review & { sx?: any }) => {
  return (
    <Card
      sx={{
        bgcolor: "#F5F5F5",
        borderRadius: "3px",
        textAlign: "center",
        maxWidth: { xs: 350, sm: 420, md: 375 },
        maxHeight: 620,
        mb: { md: 4 },
        boxShadow: "0.5px 2px 5px rgba(0,0,0,25%)",
        ...sx,
      }}
    >
      <Stack alignItems="center" pt={5} pb={6} px="25px" bgcolor="#f8f8f8">
        <Box
          component="img"
          src={process.env.REVIEWS_ASSETS + "/" + imgSrc}
          borderRadius="50%"
          width={160}
          height={160}
          sx={{ bgcolor: "#b5b5b5" }}
          mb="15px"
        ></Box>
        <Typography
          variant="h3"
          fontSize="1.375rem"
          mb={0.75}
          textTransform="uppercase"
        >
          {title}
        </Typography>
        <Rating rating={rating} />
        <Typography variant="body1" fontSize={{ xs: "1.325rem", md: "1.3rem" }}>
          {text}
        </Typography>
      </Stack>
    </Card>
  );
};

export default ItemReview;

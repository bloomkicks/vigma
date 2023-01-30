import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const Rating = ({ rating = 5 }) => {
  let starArray = Array(5)
    .fill(null)
    .map((i) => i);
  return (
    <Stack direction="row" mb={2} spacing={0.2}>
      {starArray.map((star, index) => (
        <Box
          component="img"
          width={31}
          height={30}
          key={"star" + index}
          src={
            process.env.REVIEWS_ASSETS +
            (index >= rating ? "/grey-star.svg" : "/star.svg")
          }
        ></Box>
      ))}
    </Stack>
  );
};

export default Rating;

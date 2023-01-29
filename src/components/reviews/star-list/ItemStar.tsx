import Box from "@mui/material/Box";

const ItemStar = ({ isGrey = false }) => {
  return (
    <Box
      component="img"
      width={36.5}
      height={35}
      src={
        process.env.REVIEWS_ASSETS + (isGrey ? "/grey-star.svg" : "/star.svg")
      }
    ></Box>
  );
};

export default ItemStar;

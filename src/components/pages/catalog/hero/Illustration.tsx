import Box from "@mui/material/Box";

const Illustration = ({ sx }: { sx: any }) => {
  return (
    <Box
      component="img"
      src="/images/catalog/hero-kitchen.png"
      alt=""
      width="867px"
      height="639.95px"
      sx={sx}
    ></Box>
  );
};

export default Illustration;

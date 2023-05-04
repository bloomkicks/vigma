import Box from "@mui/material/Box";

const YaMapSceleton = () => {
  return (
    <Box
      component="section"
      bgcolor="#D7D7D7"
      sx={{
        width: { xs: "100%", md: "44%" },
        height: { xs: 300, sm: 300, md: 340, lg: 360 },
        maxWidth: { xs: 400, lg: 450 },
      }}
    ></Box>
  );
};

export default YaMapSceleton;

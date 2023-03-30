import Box from "@mui/material/Box";

const SliderSkeleton = (props: any) => {
  let height = 701;
  let widthFor2 = 713;
  let mobileHeight = 513;
  let mobileWidth = 256;

  return (
    <Box
      height={{ xs: mobileHeight, md: height }}
      width={{ xs: mobileWidth, md: widthFor2 }}
      bgcolor="#D7D7D7"
    >
      <Box height="100%" width={16} mx="auto" bgcolor="#FFFFFF"></Box>
    </Box>
  );
};

export default SliderSkeleton;

import Box from "@mui/material/Box";

const SliderSkeleton = (props: any) => {
  let height = 487;
  let widthFor2 = 703;
  let mobileHeight = 380;
  let mobileWidth = 268;

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

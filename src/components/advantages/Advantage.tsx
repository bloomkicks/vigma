import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const Advantage = ({
  imgSrc,
  title,
  description,
}: {
  imgSrc: string;
  title: string;
  description: string;
}) => {
  let isContract = imgSrc.includes("contract");
  let isTools = imgSrc.includes("tools");
  let isPackage = imgSrc.includes("package");
  return (
    <Stack
      direction="row"
      height="100%"
      width="100%"
      alignItems="flex-start"
      justifyContent="flex-start"
      pl={{ xs: 0, md: 1 }}
    >
      <Box
        px={1.1}
        py={0.8}
        pt={isTools || isContract ? 0.9 : isPackage ? 0.6 : 1}
        width={{ xs: "65px", sm: "70px", md: "80px" }}
        flexShrink="0"
        height="fit-content"
        sx={{
          borderRight: { xs: "1px solid black", md: "2px solid black" },
          borderBottom: { xs: "1px solid black", md: "2px solid black" },
        }}
      >
        <Box
          component="img"
          src={imgSrc}
          alt=""
          width={!isContract && !isTools ? "100%" : "92%"}
          mb={isContract ? "-2px" : 0}
          height="auto"
        />
      </Box>
      <Box pl={{ xs: 1.5, md: 2 }} pt={0.5} textAlign="left">
        <Typography variant="h3" mb={0.5} position="relative">
          {title}
        </Typography>
        <Typography component="p" variant="body2" position="relative">
          {description}
        </Typography>
      </Box>
    </Stack>
  );
};

export default Advantage;

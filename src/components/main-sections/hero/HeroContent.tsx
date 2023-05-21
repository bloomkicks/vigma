import Highlighter from "../../general/Highlighter";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import HeroDescription from "./HeroDescription";
import CallUsButton from "./CallUsButton";

const HeroContent = ({ sx, onCallUs }: { onCallUs: () => void; sx?: any }) => {
  const isVerySmall = useMediaQuery("(max-width: 374px)");

  return (
    <Box
      sx={{
        flexShrink: 1,
        width: { xs: "95%", sm: "80%", md: "51%", lg: "auto" },
        maxWidth: { md: 660, lg: 700, xl: 725 },
        pl: isVerySmall ? 1 : { xs: 1.5, lg: 2 },
        ml: "auto",
        pb: 2,
      }}
    >
      <Typography
        variant="h1"
        color="white"
        sx={{
          position: "relative",
          zIndex: 2,
          mb: { xs: 2, sm: 2.5, md: 3 },
          fontSize: isVerySmall
            ? "2.95rem"
            : { xs: "3.15rem", sm: "3.4rem", lg: "4.25rem", xl: "4.4rem" },
        }}
      >
        <Highlighter
          sx={{
            width: { xs: "100%", md: "140%" },
            height: { xs: 17, sm: 20, md: 25, lg: 45 },
            left: { xs: -80, sm: -180, md: -300, lg: -500 },
            bottom: { xs: -2, md: -4, lg: -7 },
            zIndex: -1,
          }}
          lines={[
            {
              length: 100,
              opacity: 0.25,
            },
            {
              length: 90,
              opacity: 0.27,
            },
            {
              length: 78,
              opacity: 0.4,
            },
          ]}
        />
        {/* УДОБНЫЕ КУХНИ ДЛЯ ВАШЕГО ДОМА */}
        УДОБНЫЕ КУХНИ НА ЗАКАЗ В СПБ
      </Typography>
      <HeroDescription />
      <CallUsButton
        onClick={onCallUs}
        sx={{
          display: { xs: "flex", md: "none" },
          position: "relative",
          alignSelf: "center",
          width: { xs: "90%", sm: "70%" },
          mt: { xs: 3.5, sm: 4 },
        }}
      />
    </Box>
  );
};

export default HeroContent;

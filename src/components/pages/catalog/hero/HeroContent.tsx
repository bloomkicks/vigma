import useMediaQuery from "@mui/material/useMediaQuery";
import Highlighter from "../../../general/Highlighter";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Bold } from "../../../main-sections/hero/HeroDescription";

const HeroContent = ({ sx }: { sx: any }) => {
  const isVerySmall = useMediaQuery("(max-width: 374px)");
  return (
    <Box sx={{ textAlign: "left", ...sx }}>
      <Typography
        variant="h1"
        mb={{ xs: 2.5, md: 3 }}
        position="relative"
        sx={{
          zIndex: 2,
          fontSize: isVerySmall
            ? "2.95rem"
            : { xs: "3.15rem", sm: "3.4rem", lg: "4.25rem", xl: "4.5rem" },
        }}
      >
        НАШИ КУХНИ НА ЛЮБОЙ ВКУС
        <Highlighter
          sx={{
            height: { xs: 20, sm: 25, md: 30, lg: 45 },
            width: "100%",
            left: "-45%",
            bottom: { xs: -3, md: -6, lg: -8 },
            zIndex: -1,
          }}
          lines={[
            {
              length: 100,
              opacity: 0.22,
            },
            {
              length: 90,
              opacity: 0.25,
            },
            {
              length: 78,
              opacity: 0.3,
            },
          ]}
        />
        <Highlighter
          sx={{
            height: { xs: 20, sm: 25, md: 30, lg: 45 },
            width: { xs: "100%", lg: "125%" },
            right: { xs: "-40%", md: -200, lg: -400 },
            top: { xs: -3.5, md: -7, lg: -8 },
            zIndex: -1,
            transform: "scaleX(-1)",
          }}
          lines={[
            {
              length: 100,
              opacity: 0.22,
            },
            {
              length: 90,
              opacity: 0.25,
            },
            {
              length: 78,
              opacity: 0.3,
            },
          ]}
        />
      </Typography>
      <Typography
        variant="h2"
        component="p"
        mb={{ xs: 1.75, md: 2 }}
        width="95%"
        fontSize={
          isVerySmall
            ? "1.4rem"
            : {
                xs: "1.45rem",
                sm: "1.5rem",
                md: "1.55rem",
                lg: "1.85rem",
                xl: "1.9rem",
              }
        }
        fontWeight="400"
      >
        Каталог выполненных проектов и источник для вдохновения
      </Typography>
      <Typography
        variant="h2"
        component="p"
        width="95%"
        fontSize={
          isVerySmall
            ? "1.4rem"
            : {
                xs: "1.45rem",
                sm: "1.5rem",
                md: "1.55rem",
                lg: "1.85rem",
                xl: "1.9rem",
              }
        }
        fontWeight="400"
      >
        Рассчитайте стоимость кухни для вас и получите скидку до{" "}
        <Bold>40%</Bold>
      </Typography>
    </Box>
  );
};

export default HeroContent;

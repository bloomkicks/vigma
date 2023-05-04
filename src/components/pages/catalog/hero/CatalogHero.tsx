import HeroContent from "./HeroContent";
import HeroIllustration from "./HeroIllustration";
import Stack from "@mui/material/Stack";

const CatalogHero = () => {
  return (
    <Stack
      component="article"
      id="catalog-hero"
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={{ sm: 5, lg: 6.5 }}
      pt={{ xs: 9, md: 5.5, xl: 3 }}
      pb={{ xs: 7.5, sm: 8, md: 7 }}
      pl={{ xs: 3, md: 2 }}
      px={2}
      sx={{
        position: "relative",
        left: { xs: 0, md: -80, lg: -140, xl: -160 },
      }}
    >
      <HeroIllustration
        sx={{
          width: { xs: "80%", md: "50%" },
          minWidth: 320,
          maxWidth: { xs: 380, sm: 400, md: "600px", lg: "770px" },
          height: "auto",
          transform: {
            xs: "scaleX(-1) translateY(11%)",
            md: "translateY(11%)",
          },
          position: { xs: "absolute", md: "relative" },
          zIndex: { xs: 0, md: 3 },
          right: { xs: -50, md: 0 },
          top: { xs: "25%", md: 0 },
          opacity: { xs: 0.175, sm: 0.2, md: 1 },
        }}
      />
      <HeroContent
        sx={{
          maxWidth: { xs: 450, sm: 600, md: 800 },
          width: { sm: "100%", md: "48%" },
          pb: 2,
          zIndex: { xs: 1, md: 0 },
        }}
      />
    </Stack>
  );
};

export default CatalogHero;

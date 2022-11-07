import Typography from "@mui/material/Typography";
import Background from "./Background";
import Stack from "@mui/material/Stack";
import ButtonChoice from "./ButtonChoice";

const Hero = () => {
  return (
    <Stack
      component="article"
      id="hero"
      alignItems="center"
      justifyContent="center"
      sx={{
        px: { md: 28 },
        "article#hero&": {
          pt: { md: 16, lg: 18 },
          pb: { md: 15, lg: 17 },
        },
        maxWidth: "100% !important",
      }}
    >
      <Background />
      <Typography
        variant="h1"
        color="text.light"
        sx={{
          position: "relative",
          mb: 2,
          maxWidth: 982,
        }}
      >
        КАЧЕСТВЕННАЯ КОРПУСНАЯ МЕБЕЛЬ ПО ИНДИВИДУАЛЬНОМУ ПРОЕКТУ
      </Typography>
      <Typography
        component="p"
        variant="subtitle2"
        color="text.light"
        sx={{
          position: "relative",
          mb: 10.5,
          maxWidth: 800,
        }}
      >
        Рассчитайте стоимость собственного проекта или выберите понравившуюся
        работу среди нашего каталога мебели
      </Typography>
      <ButtonChoice />
    </Stack>
  );
};

export default Hero;

import useTheme from "@mui/system/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Background from "./Background";
import Stack from "@mui/material/Stack";
import ButtonChoice from "./ButtonChoice";

const Hero = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  // let isDesktop = true
  return (
    <Stack
      component="article"
      id="hero"
      alignItems="center"
      justifyContent="center"
      sx={{
        "article#hero&": {
          pt: { xs: 14, md: 16, lg: 19 },
          pb: { xs: 13, md: 15, lg: 17.5 },
        },
        maxWidth: "100% !important",
      }}
    >
      <Background />
      <Typography
        variant="h1"
        color="secondary.main"
        sx={{
          position: "relative",
          mb: 2,
          maxWidth: 982,
        }}
      >
        {isDesktop
          ? "КАЧЕСТВЕННАЯ КОРПУСНАЯ МЕБЕЛЬ ПО ИНДИВИДУАЛЬНОМУ ПРОЕКТУ"
          : "КАЧЕСТВЕННАЯ КОРПУСНАЯ МЕБЕЛЬ НА ЗАКАЗ"}
      </Typography>
      <Typography
        component="p"
        variant="subtitle2"
        color="secondary.main"
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

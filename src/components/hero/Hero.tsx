import useTheme from "@mui/system/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Background from "./Background";
import Stack from "@mui/material/Stack";
import ButtonChoice from "./ButtonChoice";

const Hero = () => {
  const theme = useTheme();
  const isReallySmall = useMediaQuery("(max-width: 376px)");
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  // let isDesktop = true
  return (
    <Stack
      component="article"
      id="hero"
      alignItems="center"
      justifyContent="center"
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
          ? "КОРПУСНАЯ МЕБЕЛЬ ПО ИНДИВИДУАЛЬНОМУ ПРОЕКТУ"
          : "КОРПУСНАЯ МЕБЕЛЬ НА ЗАКАЗ"}
      </Typography>
      <Typography
        component="p"
        variant="subtitle2"
        color="secondary.main"
        sx={{
          position: "relative",
          mb: isReallySmall ? 5 : { xs: 6.5, md: 7.5, lg: 8.5 },
          maxWidth: 800,
        }}
      >
        Рассчитайте стоимость собственного проекта или закажите понравившуюся
        работу в нашем каталоге кухонь
      </Typography>
      <ButtonChoice />
    </Stack>
  );
};

export default Hero;

import Typography from "@mui/material/Typography";
import Background from "./Background";
import Stack from "@mui/material/Stack";
import ButtonChoice from "./ButtonChoice";

const Hero = () => {
  return (
    <Stack
      component="section"
      alignItems="center"
      justifyContent="center"
      sx={{
        px: { lg: 28 },
        pt: { lg: 16 },
        pb: { lg: 15 },
        maxWidth: "100% !important",
      }}
    >
      <Background />
      <Typography
        variant="h1"
        color="text.light"
        sx={{
          position: "relative",
          mb: 2.4,
          maxWidth: 982,
        }}
      >
        КАЧЕСТВЕННАЯ КОРПУСНАЯ МЕБЕЛЬ ПО ИНДИВИДУАЛЬНОМУ ПРОЕКТУ
      </Typography>
      <Typography
        color="text.light"
        sx={{
          position: "relative",
          mb: 11.5,
          maxWidth: 800,
        }}
      >
        Рассчитайте стоимость собственного проекта или выберите понравившуюся
        работу среди нашего каталога выполненных работ
      </Typography>
      <ButtonChoice />
    </Stack>
  );
};

export default Hero;

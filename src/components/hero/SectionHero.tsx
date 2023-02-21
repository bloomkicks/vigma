import useTheme from "@mui/system/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Background from "./Background";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ButtonChoice from "./ButtonChoice";

const SectionHero = () => {
  const theme = useTheme();
  const isReallySmall = useMediaQuery("(max-width: 376px)");
  const isNotMobile = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Stack
      component="article"
      id="hero"
      alignItems="center"
      justifyContent="center"
      height={{ sm: 700, lg: 800 }}
    >
      <Background />
      <Typography
        variant="h1"
        color="secondary.main"
        sx={{
          position: "relative",
          mb: { xs: 1.4, md: 1.6 },
          // letterSpacing: { xs: "0.5px", md: "0.6px" },
          fontSize: { xs: "2.5rem", sm: "3rem", md: "3.4rem" },
          maxWidth: 1000,
        }}
      >
        {isNotMobile
          ? "КУХНИ ПО ИНДИВИДУАЛЬНОМУ ДИЗАЙН-ПРОЕКТУ В СПБ"
          : "КУХНИ ПО ИНДИВИДУАЛЬНОМУ ДИЗАЙН-ПРОЕКТУ В САНКТ-ПЕТЕРБУРГЕ"}
      </Typography>
      <Typography
        variant="h2"
        component="h3"
        fontSize={{ xs: "1.65rem", md: "1.9rem" }}
        lineHeight={1.3}
        fontWeight="400"
        position="relative"
        color="white"
        mb={6}
        maxWidth={900}
      >
        Специальное предложение
        <Typography
          variant="inherit"
          component="span"
          display="inline"
          sx={{ fontWeight: "bold" }}
        >
          {" "}
          до конца месяца
        </Typography>
        . Все кухни нашего производства на заказ со скидкой{" "}
        <Typography variant="inherit" component="span" display="inline-block">
          до{" "}
          <Typography
            variant="inherit"
            component="span"
            display="inline"
            sx={{ fontWeight: "bold" }}
          >
            40%
          </Typography>
        </Typography>
      </Typography>
      <Typography position="relative" color="white" mb={{ xs: 3.2, md: 3.4 }}>
        Успейте сделать заказ и получите подарок на выбор.{" "}
        <Box component="br" display={{ xs: "none", md: "block" }}></Box>
        Составляем{" "}
        <Typography variant="inherit" component="span" display="inline-block">
          дизайн-проект
        </Typography>{" "}
        под ключ
      </Typography>
      <ButtonChoice />
    </Stack>
  );
};

export default SectionHero;

import useTheme from "@mui/system/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Background from "./Background";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ButtonChoice from "./ButtonChoice";

const SectionHero = () => {
  const theme = useTheme();
  const isVerySmall = useMediaQuery("(max-width: 374px)");

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
          fontSize: isVerySmall
            ? "2.95rem"
            : { xs: "3.15rem", sm: "4rem", md: "4.25rem" },
          maxWidth: 1100,
          px: { sm: 2, md: 4 },
        }}
      >
        {/* {isNotMobile
          ? "КУХНИ ПО ИНДИВИДУАЛЬНОМУ ДИЗАЙН-ПРОЕКТУ В СПБ"
          : "КУХНИ ПО ИНДИВИДУАЛЬНОМУ ДИЗАЙН-ПРОЕКТУ В САНКТ-ПЕТЕРБУРГЕ"
          } */}
        ЛЮБЫЕ КУХНИ НА ЗАКАЗ ОТ ПРОИЗВОДИТЕЛЯ
      </Typography>
      <Typography
        variant="h2"
        component="h3"
        fontSize={{ xs: "1.5rem", md: "1.9rem" }}
        lineHeight={1.3}
        fontWeight="400"
        position="relative"
        color="white"
        mb={{ xs: 5, md: 6 }}
        maxWidth={950}
        sx={{
          px: { sm: 2, md: 4 },
        }}
      >
        Специальное предложение
        <Typography
          variant="inherit"
          component="span"
          display="inline"
          sx={{ fontWeight: "bold" }}
        >
          {" "}
          до 15 апреля
        </Typography>{" "}
        ‒ все кухни нашего производства со скидкой{" "}
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
      <Typography
        position="relative"
        variant="h2"
        component="p"
        color="white"
        mb={{ xs: 3, md: 3.4 }}
        maxWidth={{ sm: 800, md: 900 }}
        sx={{
          px: { sm: 2, md: 4 },
          fontSize: { xs: "1.45rem", md: "1.8rem" },
          fontWeight: 400,
        }}
      >
        Успейте сделать заказ ‒ получите
        <Typography
          variant="inherit"
          component="span"
          display="inline"
          sx={{ fontWeight: "bold" }}
        >
          {" "}
          дизайн-проект
        </Typography>{" "}
        и
        <Typography
          variant="inherit"
          component="span"
          display="inline"
          sx={{ fontWeight: "bold" }}
        >
          {" "}
          подарок
        </Typography>{" "}
        на выбор
        {/* <Box component="br" display={{ xs: "none", md: "block" }}></Box> */}
      </Typography>
      <ButtonChoice />
    </Stack>
  );
};

export default SectionHero;

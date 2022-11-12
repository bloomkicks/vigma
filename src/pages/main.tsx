import useMediaQuery from "@mui/material/useMediaQuery";
import MainProduct from "../components/main-product/MainProduct";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Advantages from "../components/advantages/Advantages";
import Contacts from "../components/contacts/Contacts";
import Hero from "../components/hero/Hero";

const MainPage = () => {
  const isReallySmall = useMediaQuery("(max-width: 376px)");
  return (
    <Container
      component="main"
      sx={{
        bgcolor: "secondary.main",
        alignItems: "stretch",
        width: "100%",
        maxWidth: { xs: "100%" },
        overflowX: { md: "hidden" },
        p: { xs: 0 },
        textAlign: "center",
        "& > article": {
          position: "relative",
          width: "100%",
          pt: "65px",
          pb: "70px",
          px: { xs: 3, md: 4, lg: 9 },
          maxWidth: 1366,
          mx: "auto",
        },
        "& > article > h2": {
          mb: { xs: "45px", md: "50px" },
        },
        "& > article#advantages": {
          px: { xs: 3, md: 6, lg: 10 },
          pr: { xs: 3, md: 10, lg: 12 },
        },
        "& > article#product": {
          pb: { xs: "40px", md: "55px" },
        },
        "& > article#product > h2": {
          mb: { xs: "35px", md: "50px" },
        },
        "& > article#hero": {
          maxWidth: "100%",
          pt: isReallySmall ? 7 : { xs: 10, md: 14.5, lg: 18.5 },
          pb: isReallySmall ? 8 : { xs: 10, md: 14.5, lg: 18.5 },
        },
      }}
    >
      <Hero />
      <Advantages />
      <Divider />
      <MainProduct />
      <Divider />
      <Contacts />
    </Container>
  );
};

export default MainPage;

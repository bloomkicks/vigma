import useMediaQuery from "@mui/material/useMediaQuery";
import MainProduct from "../components/main-product/MainProduct";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Advantages from "../components/advantages/Advantages";
import Reviews from "../components/reviews/Reviews";
import Contacts from "../components/contacts/Contacts";
import Hero from "../components/hero/Hero";
import Certificates from "../components/certificates/Certificates";

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
          pt: "50px",
          pb: "55px",
          px: { xs: 3, md: 4, lg: 9 },
          maxWidth: 1366,
          mx: "auto",
        },
        "& > article > h2": {
          mb: { xs: "35px", md: "40px" },
        },
        "& > article#advantages > h2": {
          mb: { xs: "35px", md: "35px" },
        },
        "& > article#advantages": {
          px: { xs: 3, md: 8, lg: 10 },
          pr: { xs: 3, md: 10, lg: 12 },
        },
        "& > article#product": {
          pb: { xs: "40px", md: "55px" },
        },
        "& > article#reviews": {
          px: { xs: 3, md: 4, lg: 7 },
        },
        "& > article#hero": {
          maxWidth: "100%",
          pt: isReallySmall ? 9 : { xs: 12, md: 12.5, lg: 14, xl: 18.5 },
          pb: isReallySmall ? 11 : { xs: 14, md: 14, lg: 16, xl: 18.5 },
        },
      }}
    >
      <Hero />
      <Advantages />
      <Divider />
      <Reviews />
      <Divider />
      <MainProduct />
      <Divider />
      <Contacts />
      <Divider />
      <Certificates />
    </Container>
  );
};

export default MainPage;

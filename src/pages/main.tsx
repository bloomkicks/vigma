import useMediaQuery from "@mui/material/useMediaQuery";
import MainProducts from "../components/main-products/SectionMainProducts";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Advantages from "../components/advantages/Advantages";
import SectionReviews from "../components/reviews/SectionReviews";
import SectionContacts from "../components/contacts/SectionContacts";
import Hero from "../components/hero/Hero";
import Certificates from "../components/certificates/SectionCertificates";

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
          pt: "55px",
          pb: "50px",
          px: { xs: 3, sm: 5, md: 4, lg: 9 },
          maxWidth: 1366,
          mx: "auto",
        },
        "& > article > h2": {
          mb: { xs: "30px", md: "35px" },
        },
        "& > article#advantages": {
          px: { xs: 3, sm: 5, md: 8, lg: 10 },
          pr: { xs: 3, md: 10, lg: 12 },
          pb: { lg: "55px" },
          pt: "60px",
        },
        "& > article#advantages > h2": {
          mb: { xs: "30px", md: "40px" },
        },
        "& > article#products": {
          px: { xs: 1, md: 2, lg: 7 },
          pb: { xs: "40px", md: "55px" },
        },
        "& > article#reviews": {
          px: { xs: 3, md: 4, lg: 7 },
        },
        "& > article#hero": {
          maxWidth: "100%",
          px: { sm: 6 },
          pt: isReallySmall ? 9 : { xs: 14.5, md: 12.5, lg: 14, xl: 18.5 },
          pb: isReallySmall ? 11 : { xs: 16.5, md: 14, lg: 16, xl: 18.5 },
        },
      }}
    >
      <Hero />
      <Advantages />
      <Divider />
      <MainProducts />
      <Divider />
      <SectionReviews />
      <Divider />
      <Certificates />
      <Divider />
      <SectionContacts />
    </Container>
  );
};

export default MainPage;

import useMediaQuery from "@mui/material/useMediaQuery";
import MainProducts from "../components/main-products/SectionMainProducts";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import SectionAdvantages from "../components/advantages/SectionAdvantages";
import SectionReviews from "../components/reviews/SectionReviews";
import SectionContacts from "../components/contacts/SectionContacts";
import Hero from "../components/hero/Hero";
import Certificates from "../components/certificates/SectionCertificates";
import SectionMainQuiz from "../components/main-quiz/SectionMainQuiz";
import SectionWorkSteps from "../components/work-steps/SectionWorkSteps";

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
          pt: { xs: "45px", md: "50px" },
          pb: { xs: "40px", md: "45px" },
          px: { xs: 3, sm: 5, md: 4, lg: 9 },
          maxWidth: 1366,
          mx: "auto",
        },
        "& > article > h2": {
          mb: { xs: "30px", md: "35px" },
        },
        "& > article#advantages": {
          pl: { xs: 2, sm: 5, md: 4, lg: 9 },
          pb: { lg: "55px" },
        },
        "& > article#work-steps": {
          pt: { xs: "37.5px", md: "40px" },
        },
        "& > article#quiz": {
          px: 0,
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
          px: { xs: 3, md: 5, lg: 6 },
          pt: isReallySmall ? 10 : { xs: 13, lg: 14, xl: 15 },
          pb: isReallySmall ? 9 : { xs: 12, md: 14, lg: 16, xl: 17 },
        },
      }}
    >
      <Hero />
      <SectionAdvantages />
      <Divider />
      <SectionWorkSteps />
      <Divider />
      <MainProducts />
      <Divider />
      <SectionReviews />
      <Divider />
      <Certificates />
      <Divider />
      <SectionContacts />
      <Divider />
      <SectionMainQuiz />
    </Container>
  );
};

export default MainPage;

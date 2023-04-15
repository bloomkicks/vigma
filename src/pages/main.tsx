import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import SectionMainProducts from "../components/main-products/SectionMainProducts";
import SectionAdvantages from "../components/advantages/SectionAdvantages";
import SectionReviews from "../components/reviews/SectionReviews";
import SectionContacts from "../components/contacts/SectionContacts";
import SectionHero from "../components/hero/SectionHero";
import SectionCertificates from "../components/certificates/SectionCertificates";
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
          pt: { xs: "37.5px", md: "45px" },
          pb: { xs: "40px", md: "45px" },
          px: { xs: 3, sm: 5, md: 4, lg: 9 },
          maxWidth: 1366,
          mx: "auto",
        },
        "& > article > h2": {
          mb: { xs: "25px", md: "30px" },
        },
        "& > article#advantages": {
          pl: { xs: 2, sm: 5, md: 4, lg: 9 },
          pb: { lg: "55px" },
        },
        "& > article#work-steps": {
          pt: { xs: "37.5px", md: "37.5px" },
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
          pt: isReallySmall ? 9 : { xs: 12.5, lg: 12, xl: 12.5 },
          pb: isReallySmall ? 8 : { xs: 11.5, md: 13, lg: 12.5, xl: 16.5 },
        },
      }}
    >
      <SectionHero />
      <SectionAdvantages />
      <Divider />
      <SectionWorkSteps />
      <Divider />
      <SectionMainProducts />
      <Divider />
      <SectionReviews />
      <Divider />
      <SectionCertificates />
      <Divider id="contacts-start" />
      <SectionContacts />
      <Divider id="quiz-start" />
      <SectionMainQuiz />
    </Container>
  );
};

export default MainPage;

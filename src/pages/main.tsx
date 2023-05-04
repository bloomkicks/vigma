import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import SectionProducts from "../components/main-sections/products/SectionProducts";
import SectionAdvantages from "../components/main-sections/advantages/SectionAdvantages";
import SectionReviews from "../components/main-sections/reviews/SectionReviews";
import SectionContacts from "../components/main-sections/contacts/SectionContacts";
import SectionHero from "../components/main-sections/hero/SectionHero";
import SectionCertificates from "../components/main-sections/certificates/SectionCertificates";
import SectionQuiz from "../components/main-sections/quiz/SectionQuiz";
import SectionWorkSteps from "../components/main-sections/work-steps/SectionWorkSteps";
import SectionOfferChoice from "../components/main-sections/offer-choice/SectionOfferChoice";

const MainPage = () => {
  const isReallySmall = useMediaQuery("(max-width: 376px)");
  return (
    <Container
      component="main"
      sx={{
        bgcolor: "grey.50",
        alignItems: "stretch",
        width: "100%",
        maxWidth: { xs: "100%" },
        overflowX: { md: "hidden" },
        p: { xs: 0 },
        textAlign: "center",
        "& > article": {
          position: "relative",
          width: "100%",
          pt: { xs: "37.5px", md: "40px" },
          pb: { xs: "37.5px", md: "40px" },
          px: { xs: 3, sm: 5, md: 4, lg: 9 },
          maxWidth: 1366,
          mx: "auto",
        },
        "& > article > h2": {
          mb: { xs: "20px", md: "30px" },
        },
        "& > article#advantages": {
          pl: { xs: 2.5, sm: 5, md: 4, lg: 9 },
          pb: { lg: "55px" },
          pt: { xs: "37.5px", md: "40px" },
        },
        "& > article#work-steps": {
          pt: { xs: "35px", md: "35px" },
          pb: { xs: "29.5px", md: "40px" },
        },
        "& > article#quiz": {
          px: 0,
          pb: { xs: "30px", md: "40px" },
        },
        "& > article#offer-choice": {
          pt: { xs: "35px", md: "32.5px" },
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
          px: { xs: 3, md: 6, lg: 8 },
          pt: isReallySmall ? 9 : { xs: 12, lg: 11.8, xl: 11.5 },
          pb: isReallySmall ? 9 : { xs: 12, md: 13.5, lg: 11.5, xl: 12 },
        },
        "& > article#contacts": {
          maxWidth: { xs: 410, sm: 1366 },
        },
        "& > article#contacts > h2, & > article#products > h2": {
          mb: { xs: "25px", md: "30px" },
        },
      }}
    >
      <SectionHero />
      <SectionAdvantages />
      <Divider />
      <SectionWorkSteps />
      <Divider />
      <SectionProducts />
      <Divider />
      <SectionReviews />
      <Divider />
      <SectionCertificates />
      <Divider />
      <SectionContacts />
      <SectionOfferChoice />
      <Divider />
      <SectionQuiz />
    </Container>
  );
};

export default MainPage;

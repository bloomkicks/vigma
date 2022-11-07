import MainWork from "../components/main-work/MainWork";
import Footer from "../components/layout/Footer";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Advantages from "../components/advantages/Advantages";
import Contacts from "../components/contacts/Contacts";
import Hero from "../components/hero/Hero";

const MainPage = (props) => {
  return (
    <Container
      component="main"
      alignItems="stretch"
      sx={{
        bgcolor: "secondary.main",
        width: "100%",
        maxWidth: { xs: "100%" },
        p: { xs: 0 },
        textAlign: "center",
        "& > article": {
          position: "relative",
          width: "100%",
          pt: { xs: "65px", md: "60px" },
          pb: { xs: "70px", md: "65px" },
          px: { xs: 3, md: 4, lg: 9 },
          maxWidth: 1366,
          mx: "auto",
        },
        "& > article#advantages": {
          px: { xs: 3, md: 6, lg: 10 },
          pr: { xs: 3, md: 10, lg: 12 },
        },
        "& > article > h2": {
          mb: { xs: "45px" },
        },
      }}
    >
      <Hero />
      <Advantages />
      <Divider />
      <MainWork />
      <Divider />
      <Contacts />
    </Container>
  );
};

export default MainPage;

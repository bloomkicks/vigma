import MainWork from "../components/main-work/MainWork";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Advantages from "../components/advantages/Advantages";
import Contacts from "../components/contacts/Contacts";
import Hero from "../components/hero/Hero";

const MainPage = () => {
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
        "& > article#advantages": {
          px: { xs: 3, md: 6, lg: 10 },
          pr: { xs: 3, md: 10, lg: 12 },
        },
        "& > article > h2": {
          mb: { xs: "45px", md: "50px" },
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

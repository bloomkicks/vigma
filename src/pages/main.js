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
        "& > section": {
          position: "relative",
          width: "100%",
          pt: { lg: "60px" },
          pb: { lg: "65px" },
        },
        "& > section > h2": {
          mb: { lg: "45px" },
        },
      }}
    >
      <Hero />
      <Advantages />
      <Divider />
      <Contacts />
      <Footer />
    </Container>
  );
};

export default MainPage;

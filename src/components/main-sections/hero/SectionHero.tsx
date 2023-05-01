import { useState } from "react";
import CallUsPopup from "../../general/call-us-popup/CallUsPopup";
import MainContent from "./MainContent";

import Background from "./Background";
import Stack from "@mui/material/Stack";

const SectionHero = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function callUsHandler() {
    setIsPopupOpen(true);
  }
  function closePopupHandler() {
    setIsPopupOpen(false);
  }

  return (
    <Stack
      id="hero"
      component="article"
      direction="row"
      alignItems="center"
      justifyContent="center"
      height={{ md: 700, lg: 690, xl: 720 }}
      spacing={{ xs: 0, md: 2.25, lg: 4 }}
      sx={{
        textAlign: "left",
      }}
    >
      <Background />
      <MainContent onCallUs={callUsHandler} />
      <CallUsPopup
        isStatic={!isPopupOpen}
        open={isPopupOpen}
        onClose={closePopupHandler}
        sx={{
          flexShrink: { xs: 0, md: 1.5, lg: 1 },
          maxWidth: 400,
          width: { xs: 350, md: "32.5%" },
          mr: {md: "auto"},
          display: { xs: isPopupOpen ? "flex" : "none", md: "block" },
        }}
      />
    </Stack>
  );
};

export default SectionHero;

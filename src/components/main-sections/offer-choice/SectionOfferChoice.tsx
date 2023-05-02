import { useState } from "react";
import CallUsPopup from "../../general/call-us-popup/CallUsPopup";
import Stack from "@mui/material/Stack";
import FreeOffer from "./FreeOffer";

const SectionOfferChoice = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function popupOpenHandler() {
    setIsPopupOpen(true);
  }
  function popupCloseHandler() {
    setIsPopupOpen(false);
  }

  return (
    <Stack
      component="article"
      id="offer-choice"
      direction={{ xs: "column", md: "row" }}
      justifyContent="center"
      alignItems="center"
      spacing={{ xs: 6.5, md: 2, lg: 5 }}
      sx={{ mx: "auto" }}
      pb={4}
    >
      <CallUsPopup open={isPopupOpen} onClose={popupCloseHandler} />
      <FreeOffer isAnother onClick={popupOpenHandler} />
      <FreeOffer onClick={popupOpenHandler} />
    </Stack>
  );
};

export default SectionOfferChoice;

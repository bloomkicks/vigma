import Stack from "@mui/material/Stack";
import FreeOffer from "./FreeOffer";

const SectionOfferChoice = () => {
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
      <FreeOffer isAnother />
      <FreeOffer />
    </Stack>
  );
};

export default SectionOfferChoice;

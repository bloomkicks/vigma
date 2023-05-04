import AdvantageList from "./AdvantageList";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const SectionAdvantages = () => {
  return (
    <Box component="article" id="advantages">
      <Typography position="relative" variant="h2">
        Почему выбирают нас:
      </Typography>
      <AdvantageList sx={{ position: "relative", mx: "auto" }} />
    </Box>
  );
};

export default SectionAdvantages;

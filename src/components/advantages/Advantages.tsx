import Crown from "./Crown";
import AdvantageList from "./AdvantageList";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Advantages = () => {
  return (
    <Box
      component="article"
      id="advantages"
      sx={{ overflowX: { xs: "hidden", md: "visible" } }}
    >
      <Crown />
      <Typography
        position="relative"
        variant="h2"
        sx={{ letterSpacing: "-1px" }}
      >
        Почему выбирают нас:
      </Typography>
      <AdvantageList sx={{ position: "relative", maxWidth: { lg: "85%" } }} />
    </Box>
  );
};

export default Advantages;

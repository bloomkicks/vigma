import Crown from "./Crown";
import ListAdvantage from "./advantage-list/ListAdvantage";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Advantages = () => {
  return (
    <Box
      component="article"
      id="advantages"
      sx={{
        px: 15,
        bgcolor: "secondary.main",
      }}
    >
      <Crown />
      <Typography variant="h2">Почему выбирают нас:</Typography>
      <ListAdvantage sx={{ position: "relative", maxWidth: { lg: "75%" } }} />
    </Box>
  );
};

export default Advantages;

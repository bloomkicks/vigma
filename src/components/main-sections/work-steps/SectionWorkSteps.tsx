import ListWorkSteps from "./ListWorkSteps";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const SectionWorkSteps = () => {
  return (
    <Box component="article" id="work-steps">
      <Typography variant="h2">
        Этапы работы:
      </Typography>
      <ListWorkSteps />
    </Box>
  );
};

export default SectionWorkSteps;

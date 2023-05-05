import WorkStepList from "./WorkStepList";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const SectionWorkSteps = () => {
  return (
    <Box component="article" id="work-steps">
      <Typography variant="h2">
        Этапы производства
      </Typography>
      <WorkStepList />
    </Box>
  );
};

export default SectionWorkSteps;

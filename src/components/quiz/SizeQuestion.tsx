import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const SizeQuestion = () => {
  return (
    <Stack spacing={1.5}>
      <TextField label="Ширина" name="Ширина" color="info" />
      <TextField label="Высота" name="Высота" color="info" />
    </Stack>
  );
};

export default SizeQuestion;

import { useRef } from "react";
import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const SizeQuestion = () => {
  return (
    <Stack spacing={1.5}>
      <TextField
        type="number"
        label="Ширина"
        name="Ширина"
        color="info"
        inputMode="numeric"
        InputProps={{
          endAdornment: <InputAdornment position="end">метр.</InputAdornment>,
        }}
      />
      <TextField
        type="number"
        label="Высота"
        name="Высота"
        color="info"
        inputMode="numeric"
        InputProps={{
          endAdornment: <InputAdornment position="end">метр.</InputAdornment>,
        }}
      />
    </Stack>
  );
};

export default SizeQuestion;

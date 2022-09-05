import { useDispatch } from "react-redux";
import { sizeActions } from "../../store/size";
import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import React from "react";

const SizeQuestion = () => {
  const dispatch = useDispatch();
  function widthHandler(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(sizeActions.setSize(["width", e.target.value]));
  }
  function heightHandler(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(sizeActions.setSize(["height", e.target.value]));
  }
  function depthHandler(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(sizeActions.setSize(["depth", e.target.value]));
  }

  return (
    <Stack spacing={1.5}>
      <TextField
        type="number"
        label="Ширина"
        name="ширина"
        onChange={widthHandler}
        color="info"
        InputProps={{
          inputProps: {
            min: 100,
          },
          endAdornment: <InputAdornment position="end">мм.</InputAdornment>,
        }}
      />
      <TextField
        type="number"
        label="Высота"
        name="высота"
        onChange={heightHandler}
        color="info"
        InputProps={{
          inputProps: {
            min: 100,
          },
          endAdornment: <InputAdornment position="end">мм.</InputAdornment>,
        }}
      />
      <TextField
        type="number"
        label="Глубина"
        name="глубина"
        onChange={depthHandler}
        color="info"
        InputProps={{
          inputProps: {
            min: 100,
          },
          endAdornment: <InputAdornment position="end">мм.</InputAdornment>,
        }}
      />
    </Stack>
  );
};

export default SizeQuestion;

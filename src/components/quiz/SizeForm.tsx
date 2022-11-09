import { useDispatch } from "react-redux";
import { sizeActions } from "../../store/size";
import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import React from "react";

function debounce(cb, seconds: number = 1) {
  let timeout: NodeJS.Timeout | null = null;

  return function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(() => cb(e), seconds * 1000);
  };
}

const SizeQuestion = () => {
  const dispatch = useDispatch();

  function change(dim: "width" | "height" | "depth", val: string) {
    dispatch(sizeActions.setSize([dim, val]));
  }

  function widthHandler(e: React.ChangeEvent<HTMLInputElement>) {
    change("width", e.target.value);
  }
  function heightHandler(e: React.ChangeEvent<HTMLInputElement>) {
    change("height", e.target.value);
  }
  function depthHandler(e: React.ChangeEvent<HTMLInputElement>) {
    change("depth", e.target.value);
  }

  return (
    <Stack spacing={1.5} className="large-fading">
      <TextField
        type="number"
        label="Ширина"
        name="ширина"
        onChange={debounce(widthHandler)}
        color="info"
        InputProps={{
          type: "number",
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
        onChange={debounce(heightHandler)}
        color="info"
        InputProps={{
          type: "number",
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
        onChange={debounce(depthHandler)}
        color="info"
        InputProps={{
          type: "number",
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

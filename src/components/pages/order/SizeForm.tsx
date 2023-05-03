import { useDispatch } from "react-redux";
import quizActions from "../../../store/quiz-slice";
import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import React from "react";

const dimTranslations = {
  width: "Ширина",
  height: "Высота",
  depth: "Глубина",
};
const dimensions = ["width", "height", "depth"];

const SizeQuestion = () => {
  const dispatch = useDispatch();
  function changeHandler(dim) {
    let timeout: NodeJS.Timeout | null = null;
    return function (e: React.ChangeEvent<HTMLInputElement>) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        dispatch(quizActions.setSize([dim, e.target.value]));
      }, 1000);
    };
  }

  return (
    <Stack spacing={1.5} className="large-fading">
      {dimensions.map((dim: string) => (
        <TextField
          type="number"
          label={dimTranslations[dim]}
          name={dimTranslations[dim].toLowerCase()}
          onChange={changeHandler(dim)}
          color="info"
          InputProps={{
            type: "number",
            inputProps: {
              min: 100,
            },
            endAdornment: <InputAdornment position="end">мм.</InputAdornment>,
          }}
          key={"size-" + dim}
        />
      ))}
    </Stack>
  );
};

export default SizeQuestion;

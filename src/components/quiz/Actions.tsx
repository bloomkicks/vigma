import { quizActions } from "../../store/quiz";
import { useDispatch } from "react-redux";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import React from "react";

const Actions = ({
  indexOfQuestion,
  isDalee,
  disabled,
}: {
  indexOfQuestion: number;
  isDalee: boolean;
  disabled: boolean;
}) => {
  const dispatch = useDispatch();

  function nextHandler() {
    dispatch(quizActions.nextQuestion());
  }

  function backHandler() {
    dispatch(quizActions.previousQuestion());
  }

  return (
    <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
      <Button
        variant="text"
        onClick={backHandler}
        sx={{
          display: indexOfQuestion >= 0 ? "block" : "none",
        }}
      >
        <Typography
          variant="inherit"
          color="text.secondary"
          position="relative"
        >
          <Box
            component="span"
            sx={{
              width: "101%",
              height: "1.3px",
              position: "absolute",
              left: "50%",
              bottom: 4,
              transform: "translateX(-50%)",
              bgcolor: "text.secondary",
              opacity: "0.8",
            }}
          ></Box>
          Назад
        </Typography>
      </Button>
      <Button
        variant="contained"
        color="info"
        onClick={nextHandler}
        disabled={disabled}
      >
        {isDalee ? "Далее" : "Пропустить"}
      </Button>
    </Stack>
  );
};

export default Actions;

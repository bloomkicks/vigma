import { quizActions } from "../../store/quiz";
import { useDispatch } from "react-redux";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import React from "react";

const Actions = ({
  isDalee,
  nextDisabled,
  backDisabled,
  onNextClick,
}: {
  isDalee: boolean;
  nextDisabled: boolean;
  backDisabled: boolean;
  onNextClick?: () => void;
}) => {
  const dispatch = useDispatch();

  function nextHandler() {
    dispatch(quizActions.nextQuestion());
    if (onNextClick) {
      onNextClick();
    }
  }

  function backHandler() {
    dispatch(quizActions.previousQuestion());
  }

  return (
    <Stack direction="row" spacing={2} sx={{ mt: 6, mb: 6 }}>
      <Button
        variant="text"
        onClick={backHandler}
        sx={{
          display: backDisabled ? "none" : "block",
          px: 2.5,
          py: "6px",
          borderRadius: "6px",
          fontSize: 18,
          "&:hover": {
            bgcolor: (theme) =>
              theme.palette.primary.light
                .replace("rgb", "rgba")
                .replace(")", ", 0.4)"),
          },
        }}
      >
        <Typography
          variant="inherit"
          color="text.secondary"
          sx={{
            lineHeight: 1.15,
            position: "relative",
            display: "inline-block",
            width: "fit-content",
          }}
        >
          <Box
            component="span"
            sx={{
              width: "101%",
              height: "1.3px",
              position: "absolute",
              left: "50%",
              bottom: 0.6,
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
        disabled={nextDisabled}
        sx={{
          px: 2.5,
          py: "6px",
          borderRadius: "6px",
          fontSize: 18,
        }}
      >
        {isDalee ? "Далее" : "Пропустить"}
      </Button>
    </Stack>
  );
};

export default Actions;

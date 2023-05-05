import quizActions from "../../../store/quiz-slice";
import { useDispatch } from "react-redux";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import React from "react";

const QuizActions = ({
  isDalee,
  nextDisabled,
  backDisabled,
  onNextClick,
  isOnMain,
}: {
  isDalee: boolean;
  nextDisabled: boolean;
  backDisabled: boolean;
  onNextClick?: () => void;
  isOnMain?: boolean;
}) => {
  const dispatch = useDispatch();
  function nextHandler() {
    dispatch(quizActions.moveNext());
    (onNextClick || function () {})();
  }

  function backHandler() {
    dispatch(quizActions.moveBack());
  }

  return (
    <Stack direction="row" spacing={2.5} sx={{ mt: 6, mb: isOnMain ? 0 : 6 }}>
      <Button
        variant="text"
        onClick={backHandler}
        sx={{
          display: backDisabled ? "none" : "block",
          px: 2.25,
          py: 1.65,
          borderRadius: "8px",
          fontSize: { xs: 17.5, md: 19.25 },
          "&:hover, &:focus": {
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
          px: 2.25,
          py: 1.65,
          borderRadius: "8px",
          fontSize: { xs: 16.25, md: 18 },
        }}
      >
        {isDalee ? "Далее" : "Пропустить"}
      </Button>
    </Stack>
  );
};

export default QuizActions;

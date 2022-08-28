import { quizActions } from "../../../store/quiz";
import { useDispatch } from "react-redux";
import { FlatQuestion } from "../../../data/quiz-questions";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import React from "react";

const Item = ({
  title = "Неизвестно",
  isSelected = false,
}: {
  title: string | FlatQuestion<string>;
  isSelected: boolean;
}) => {
  const [isSelectedState, setIsSelected] =
    useState<boolean>(isSelected);
  const dispatch = useDispatch();
  function clickHandler() {
    setIsSelected((prev) => !prev);
    dispatch(quizActions.toggleSelectAnswer(title));
  }

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "280px",
      }}
    >
      <Card
        onClick={clickHandler}
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: "260px",
          maxWidth: "320px",
          width: "100%",
          cursor: "pointer",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          // height="auto"
          height="160px"
          width="100%"
          sx={{ bgcolor: "text.secondary" }}
        >
          <Typography color="#ffffff">Image</Typography>
        </Box>
        <Box width="100%" px={1}>
          <Radio
            checked={isSelectedState}
            sx={{ ".Mui-disabled": { color: "text.primary" } }}
          />
          <Typography
            variant="h2"
            display="inline-block"
            sx={{ verticalAlign: "middle", userSelect: "none" }}
          >
            {title as string}
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
};

export default Item;

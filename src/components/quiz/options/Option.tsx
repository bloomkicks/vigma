// MUI
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
// MUI END

import { translateCategory } from "../../../features/quiz/translate";
import { quizActions } from "../../../store/quiz";
import { useDispatch } from "react-redux";
import { FlatQuestion, Category } from "../../../models/quiz";
import getImgSrc from "../../../features/quiz/get-img-src";
import React from "react";

const Option = React.memo(
  ({
    title = "Неизвестно",
    isSelected = false,
    category,
    question,
  }: {
    title: string | FlatQuestion<string>;
    isSelected: boolean;
    category: Category;
    question: string;
  }) => {
    console.log("Component of " + title + " has evaluated");
    const dispatch = useDispatch();
    const imgSrc = getImgSrc(category, question, title as string);

    function clickHandler() {
      dispatch(quizActions.toggleSelectOption(title));
    }

    return (
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        lg={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "280px",
          maxWidth: { xs: "100%", sm: "350px" },
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
            component="img"
            src={imgSrc}
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="auto"
            width="100%"
            sx={{ bgcolor: "text.secondary" }}
          ></Box>
          <Box
            width="100%"
            px={1}
            pl={{ xs: 6.5, lg: 7 }}
            py={1}
            pt={{ xs: 1.25, sm: 1 }}
            position="relative"
            minHeight={(theme) => theme.spacing(5.2)}
          >
            <Radio
              checked={isSelected}
              name={question}
              value={title}
              sx={{
                position: "absolute",
                left: (theme) => theme.spacing(1),
                top: 0,
                ".Mui-disabled": { color: "text.primary" },
              }}
            />
            <Typography
              variant="h2"
              display="inline"
              sx={{
                userSelect: "none",
                fontSize: { lg: 26 },
              }}
            >
              {category
                ? (title as string)
                : translateCategory(title as string)}
            </Typography>
          </Box>
        </Card>
      </Grid>
    );
  },
);

export default Option;

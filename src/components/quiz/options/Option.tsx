// MUI
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
// MUI END

import { quizActions } from "../../../store/quiz";
import { useDispatch } from "react-redux";
import { FlatQuestion, Category } from "../../../models/quiz";
import getImgSrc from "../../../features/quiz/get-img-src";
import { useState } from "react";

const Option = ({
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
  const dispatch = useDispatch();
  const [isSelectedState, setIsSelected] = useState<boolean>(isSelected);
  const imgSrc = getImgSrc(category, question, title as string);

  function clickHandler() {
    setIsSelected((prev) => !prev);
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

export default Option;

// MUI
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
// MUI END

import Image from "next/image";
import { quizActions } from "../../../store/quiz";
import { useDispatch } from "react-redux";
import { translateCategory } from "../../../features/quiz/translate";
import React from "react";

const QuizOption = ({
  option = "Неизвестно",
  isSelected,
  question,
  imgSrc,
  category,
}: {
  option: string;
  isSelected: boolean;
  question: string;
  imgSrc: string;
  category: string;
}) => {
  const dispatch = useDispatch();
  const optionTitle =
    category || question === "gift" ? option : translateCategory(option);

  function clickHandler() {
    dispatch(quizActions.toggleSelectOption(option));
  }

  return (
    <Grid
      item
      component="section"
      xs={12}
      sm={6}
      md={4}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "260px",
        maxWidth: { xs: "100%", sm: "290px" },
      }}
    >
      <Card
        onClick={clickHandler}
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: "240px",
          maxWidth: "260px",
          width: "100%",
          cursor: "pointer",
        }}
      >
        <Image src={imgSrc} alt="" width={260} height={145} />
        <Box
          width="100%"
          px={1}
          pl={{ xs: 6.5, lg: 6.75 }}
          py={1}
          pt={{ xs: 1.25, sm: 1 }}
          position="relative"
          minHeight={(theme) => theme.spacing(5.2)}
        >
          <Radio
            checked={isSelected}
            name={question}
            value={option}
            sx={{
              position: "absolute",
              left: (theme) => theme.spacing(1),
              top: 0,
              height: "100%",
              ".Mui-disabled": { color: "text.primary" },
            }}
          />
          <Typography
            variant="h5"
            display="inline"
            sx={{
              userSelect: "none",
              fontSize: { lg: 21 },
            }}
          >
            {optionTitle}
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
};

export default React.memo(QuizOption);

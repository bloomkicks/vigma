import Item from "./Item";
import Grid from "@mui/material/Grid";
import React from "react";

const answers = [0, 1, 2, 3];

const List = () => {
  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={3}
      justifyContent="center"
      sx={{ mb: 3 }}
    >
      {answers.map(() => {
        return <Item />;
      })}
    </Grid>
  );
};

export default List;

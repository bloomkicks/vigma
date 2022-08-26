import List from "./quiz/List";
import GiftPaper from "./GiftPaper";
import Actions from "./Actions";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from 'react'

const Page = () => {
  return (
    <Stack alignItems="center" sx={{ pt: 4 }}>
      <GiftPaper />
      <Typography variant="h1" mb={2} align="center">Выбирете форму кухни</Typography>
      <List />
      <Actions />
    </Stack>
  );
};

export default Page;

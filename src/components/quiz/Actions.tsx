import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import React from "react";

const Actions = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="text">
        <Typography
          variant="inherit"
          color="text.secondary"
          position="relative"
        >
          <Box
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
      <Button variant="contained" color="info">
        Далее
      </Button>
    </Stack>
  );
};

export default Actions;

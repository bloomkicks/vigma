import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const ButtonChoice = () => {
  return (
    <Stack
      spacing={2.5}
      alignItems="stretch"
      sx={{
        display: "inline-flex",
        width: "fit-content",
        mx: "auto",
      }}
    >
      <Button variant="contained">Рассчитать Стоимость</Button>
      <Typography
        variant="body2"
        color="text.light"
        sx={{ fontSize: 20, position: "relative" }}
      >
        ИЛИ
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        sx={{ backgroundColor: "rgba(255,255,255,80%)" }}
      >
        Выполненные Работы
      </Button>
    </Stack>
  );
};

export default ButtonChoice;

import Divider from "@mui/material/Divider";
import Link from "next/link";
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
      <Link href="/order" passHref>
        <Button
          component="a"
          variant="contained"
          sx={{
            lineHeight: "60px",
          }}
        >
          Расчёт Стоимости
        </Button>
      </Link>
      <Typography
        variant="body2"
        color="text.light"
        sx={{ fontSize: 20, position: "relative" }}
      >
        ИЛИ
      </Typography>
      <Link href="/works" passHref>
        <Button
          component="a"
          variant="contained"
          color="secondary"
          sx={{
            backgroundColor: "rgba(255,255,255,90%)",
            lineHeight: "60px",
          }}
        >
          Каталог Мебели
        </Button>
      </Link>
    </Stack>
  );
};

export default ButtonChoice;

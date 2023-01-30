import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const ButtonChoice = () => {
  const isReallySmall = useMediaQuery("(max-width: 376px)");

  return (
    <Stack
      spacing={2.3}
      alignItems="stretch"
      sx={{
        display: "inline-flex",
        width: { xs: "fit-content", xl: 400 },
        mx: "auto",
      }}
    >
      <Link href="/order" passHref>
        <Button
          component="a"
          variant="contained"
          sx={{
            px: 7,
            lineHeight: isReallySmall ? 1.2 : { xs: 2.9, md: "60px" },
            padding: isReallySmall ? "14px 40px" : "",
          }}
        >
          Расчёт Стоимости
        </Button>
      </Link>
      <Typography
        variant="body2"
        color="secondary.main"
        sx={{ position: "relative" }}
      >
        ИЛИ
      </Typography>
      <Link href="/catalog" passHref>
        <Button
          component="a"
          variant="contained"
          color="secondary"
          sx={{
            backgroundColor: "rgba(255,255,255,90%)",
            lineHeight: isReallySmall ? 1.2 : { xs: 2.9, md: "60px" },
            padding: isReallySmall ? "14px 40px" : "",
          }}
        >
          Каталог Кухонь
        </Button>
      </Link>
    </Stack>
  );
};

export default ButtonChoice;

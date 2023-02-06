import Link from "next/link";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        px: 4,
        textAlign: { md: "center" },
        pt: 5.8,
        pb: 5,
        mt: 9,
        bgcolor: "info.main",
      }}
    >
      <Typography mb={2} color="white">
        Производство Мебели - VIGMA
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="flex-start"
        spacing={{ xs: 1, md: 4, lg: 4.5 }}
        mb={5}
      >
        <Typography color="white" variant="body2">
          ОРГНИП: 319290100012218
        </Typography>
        <Typography color="white" variant="body2">
          ИНН: 292501389176
        </Typography>
      </Stack>
      <Link href="/privacy" passHref>
        <Typography
          variant="body2"
          color="white"
          component="a"
          sx={{ display: "inline-block", mx: "auto" }}
        >
          Наша политика конфиденциальности
        </Typography>
      </Link>
    </Box>
  );
};

export default Footer;

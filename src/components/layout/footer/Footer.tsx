import Socials from "./Socials";
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
        textAlign: { xs: "center" },
        pt: { xs: 6, md: 5.2 },
        pb: 4.5,
        mt: 9,
        bgcolor: "info.main",
        color: "white",
        "& a": {
          color: "white",
        },
      }}
    >
      <Typography
        mb={{ xs: 4, md: 3 }}
        color="white"
        variant="h4"
        sx={{ fontSize: "2.1rem" }}
        component="h6"
      >
        Наши контакты
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row-reverse" }}
        pl={{ md: 1 }}
        spacing={{ xs: 4, md: 7 }}
        alignItems={{ xs: "center", md: "flex-start" }}
        justifyContent="center"
      >
        <Socials sx={{ justifyContent: "center" }} />
        <Stack
          direction="column"
          justifyContent="center"
          alignItems={{ xs: "center", md: "flex-start" }}
          spacing={{ xs: 1, sm: 1.5 }}
        >
          <Link href="tel:+7 (812) 642-60-51" passHref>
            <Typography
              component="a"
              color="white"
              display="block"
              variant="subtitle1"
              mb={{ xs: 1, md: 0.75 }}
              mt={0.25}
            >
              +7 (812) 642-60-51
            </Typography>
          </Link>
          <Typography color="white" variant="body2">
            ОРГНИП: 319290100012218
          </Typography>
          <Typography color="white" variant="body2">
            ИНН: 292501389176
          </Typography>
        </Stack>
      </Stack>
      <Link href="/privacy" passHref>
        <Typography
          variant="body2"
          color="white"
          component="a"
          sx={{ display: "inline-block", mx: "auto", mt: 6.75 }}
        >
          Наша политика конфиденциальности
        </Typography>
      </Link>
    </Box>
  );
};

export default Footer;

import ItemContact from "../../contacts/contact-list/ItemContact";
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
        pt: { xs: 6.2, md: 5.2 },
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
        mb={3.25}
        color="white"
        variant="h4"
        sx={{ fontSize: { xs: "2.3rem", md: "2.1rem" } }}
        component="h6"
      >
        Наши контакты
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row-reverse" }}
        spacing={{ xs: 4, md: 6 }}
        alignItems={{ xs: "center", md: "flex-start" }}
        justifyContent="center"
      >
        <Socials sx={{ justifyContent: "center" }} />
        <Box>
          <Link href="tel:+7(812)642-60-51" passHref>
            <Typography
              component="a"
              color="white"
              display="block"
              variant="subtitle1"
              mb={{ xs: 1.5, md: 1.25 }}
              mt={0.2}
            >
              +7 (812) 642-60-51
            </Typography>
          </Link>
          <Typography color="white" variant="body2">
            <Typography
              component="span"
              sx={{ display: "inline-block", mr: 1.2 }}
            >
              г. Санкт-Петербург,
            </Typography>
            <Typography
              component="span"
              sx={{ display: "inline-block", mr: 1.2 }}
            >
              ул. Автобусная,
            </Typography>
            <Typography component="span" sx={{ display: "inline-block" }}>
              д. 3В
            </Typography>
          </Typography>
        </Box>
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems={{ xs: "center" }}
        spacing={{ xs: 0.75, sm: 1.25 }}
        divider={
          <Typography display={{ xs: "none", md: "block" }}>-</Typography>
        }
        mt={5}
      >
        <Typography color="white" variant="body2">
          ИП Филатов М. Ю.
        </Typography>
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
          sx={{ display: "inline-block", mx: "auto", mt: 6.75 }}
        >
          Наша политика конфиденциальности
        </Typography>
      </Link>
    </Box>
  );
};

export default Footer;

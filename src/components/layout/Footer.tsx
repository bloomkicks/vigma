import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        px: 4,
        pt: { xs: 10, md: 15 },
        pb: 5,
      }}
    >
      <Typography>Производство Корпусной Мебели - Вигма</Typography>
    </Box>
  );
};

export default Footer;

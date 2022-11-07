import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box component="footer" mt="auto" mb={5} textAlign="center" px={4}>
      <Typography mt={{ xs: 10, md: 15 }}>
        Производство Корпусной Мебели - Вигма
      </Typography>
    </Box>
  );
};

export default Footer;

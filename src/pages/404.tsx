import ErrorHead from "../components/layout/head-components/ErrorHead";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ErrorPage = () => {
  return (
    <>
      <ErrorHead />
      <Box sx={{ textAlign: "center", pt: 15, px: 3, mb: 5 }}>
        <Box
          component="img"
          alt=""
          src={process.env.GENERAL_ASSETS + "/error-arrow.svg"}
          sx={{
            display: "block",
            mx: "auto",
            mb: 2,
            mr: { xs: 1, md: "auto" },
          }}
        ></Box>
        <Typography variant="h1" mb={1}>
          Страница по данному адресу не найдена
        </Typography>
        <Typography
          sx={{
            fontSize: "1.625rem",
            lineHeight: 1.2,
          }}
        >
          Попробуйте использовать навигацию сверху страницы
        </Typography>
      </Box>
    </>
  );
};

export default ErrorPage;

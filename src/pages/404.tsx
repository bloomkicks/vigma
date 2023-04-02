import ErrorHead from "../components/layout/head-components/ErrorHead";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ErrorPage = () => {
  return (
    <>
      <ErrorHead />
      <Box sx={{ textAlign: "center", pt: { xs: 12, md: 20 }, px: 3, mb: 25 }}>
        <Box
          component="img"
          alt=""
          src={process.env.GENERAL_ASSETS + "/error-arrow.png"}
          sx={{
            display: "block",
            mx: "auto",
            mb: { md: 2 },
            height: { xs: 110, md: 160 },
            width: "auto",
            mr: { xs: 1, md: "auto" },
          }}
        ></Box>
        <Typography variant="h1" mb={1.75} fontSize="3.4rem">
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

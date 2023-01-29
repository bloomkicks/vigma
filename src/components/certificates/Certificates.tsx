import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

let certificates = ["фасад", "столешницы", "ламинат", "еггер"];

const Certificates = () => {
  return (
    <Box component="article" id="certificates">
      <Typography variant="h2">Сертификаты качества материалов</Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={1.5}
        flexWrap={{ md: "wrap", xl: "nowrap" }}
        justifyContent="center"
        alignItems={{ xs: "center", md: "flex-start" }}
      >
        {certificates.map((certificate, i, a) => {
          let isLast = i == a.length - 1;

          return (
            <Box
              component="img"
              src={
                process.env.CERTIFICATES_ASSETS +
                "/сертификат на " +
                certificate +
                ".png"
              }
              sx={{
                "&": {
                  ml: { md: isLast ? 0 : "12px !important", xl: 1.5 },
                  mt: {
                    md: isLast ? "12px !important" : 0,
                    xl: "0 !important",
                  },
                },
              }}
              key={certificate + i}
            ></Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Certificates;

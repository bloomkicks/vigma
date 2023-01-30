import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ItemCertificate from "./ItemCertificate";

let certificates = ["фасад", "столешницы", "ламинат", "еггер"];

const Certificates = () => {
  return (
    <Box component="article" id="certificates">
      <Typography variant="h2">Сертификаты качества</Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1.5}
        flexWrap={{ sm: "wrap", lg: "nowrap" }}
        justifyContent="center"
        alignItems={{ xs: "center", md: "flex-start" }}
        px={{ sm: 5, md: 5, lg: 0 }}
      >
        {certificates.map((certificate, i, a) => {
          let isLast = i == a.length - 1;
          let is2ndLast = i == a.length - 2;
          const imgSrc = `${process.env.CERTIFICATES_ASSETS}/сертификат на ${certificate}.png`;

          return (
            <ItemCertificate
              imgSrc={imgSrc}
              isLast={isLast}
              is2ndLast={is2ndLast}
              key={certificate + i}
            ></ItemCertificate>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Certificates;

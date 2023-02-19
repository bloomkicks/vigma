import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

let certificates = ["фасад", "столешницы", "ламинат", "еггер"];

const CertificatesSlider = ({
  certifIndex,
  slice,
}: {
  certifIndex: number;
  slice: number;
}) => {
  let height = 495;
  let width = 350;
  let mobileHeight = 381;
  let mobileWidth = 269;

  return (
    <Stack
      direction="row"
      height={{ xs: mobileHeight, md: height }}
      alignItems="flex-start"
      flexShrink={0}
      minWidth={mobileWidth}
      maxWidth="100vw"
      width={{
        xs: mobileWidth,
        md: slice == 0 ? width : width * (slice + 1) + 16 * slice,
      }}
      spacing={2}
      sx={{ overflow: "hidden" }}
    >
      {certificates.map((certif) => {
        const imgSrc = `${process.env.CERTIFICATES_ASSETS}/сертификат-${certif}.png`;
        return (
          <Box
            component="img"
            src={imgSrc}
            sx={{
              transform: {
                xs: `translateX(-${certifIndex * (mobileWidth + 16)}px)`,
                md: `translateX(-${certifIndex * (width + 16)}px)`,
              },
              transition: "transform 0.3s ease-out",
            }}
            width={{ xs: mobileWidth, md: width }}
            key={certif}
          />
        );
      })}
    </Stack>
  );
};

export default CertificatesSlider;

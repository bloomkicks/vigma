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
  let height = 484 + 4;
  let width = 340 + 4;
  let mobileHeight = 377 + 4;
  let mobileWidth = 265 + 4;

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
        const imgSrc = `${process.env.CERTIFICATES_ASSETS}/сертификат-${certif}`;
        return (
          <Box
            component="img"
            src={imgSrc + ".jpg"}
            sx={{
              transform: {
                xs: `translateX(-${certifIndex * (mobileWidth + 12)}px)`,
                md: `translateX(-${certifIndex * (width + 12)}px)`,
              },
              boxShadow: "1px 2px 4px rgba(0,0,0,0.4)",
              transition: "transform 0.3s ease-out",
            }}
            srcSet={`${imgSrc}.jpg 340w, ${imgSrc}-sm.jpg 265w`}
            sizes={`
              (max-width: 901px) 265px,
              340px
            `}
            alt="Изображение не найдено. Попробуйте обновить страницу"
            width={{ xs: mobileWidth, md: width }}
            key={certif}
          />
        );
      })}
    </Stack>
  );
};

export default CertificatesSlider;

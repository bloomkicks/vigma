import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

let certificates = [
  "nevskiy-laminat",
  "kronospan",
  "egger",
  "agt1",
  "agt2",
  "boyard",
  "sicticvar",
  "skif1",
  "skif2",
  "slotecs",
  "souz-balt-komplekt",
  "souz-balt-stolechnitsa",
];

const CertificatesSlider = ({
  certifIndex,
  slice,
}: {
  certifIndex: number;
  slice: number;
}) => {
  let height = 518.5 + 4;
  let width = 360 + 4;
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
        md: slice == 0 ? width : width * (slice + 1) + 20 * slice,
      }}
      spacing={2}
      sx={{ overflow: "hidden" }}
    >
      {certificates.map((cert) => {
        const imgSrc = `${process.env.CERTIFICATES_ASSETS}/${cert}-cert`;
        return (
          <Box
            component="img"
            src={imgSrc + ".jpg"}
            sx={{
              transform: {
                xs: `translateX(-${certifIndex * (mobileWidth + 12)}px)`,
                md: `translateX(-${certifIndex * (width + 12)}px)`,
              },
              boxShadow: "1px 2px 4px rgba(0,0,0,0.3)",
              transition: "transform 0.3s ease-out",
              alignSelf: ["egger", "boyard"].includes(cert) ? "center" : "",
            }}
            srcSet={`${imgSrc}.jpg 360w, ${imgSrc}-sm.jpg 265w`}
            sizes={`
              (max-width: 901px) 265px,
              360px
            `}
            alt="Изображение не найдено. Попробуйте обновить страницу"
            width={{ xs: mobileWidth - 4, md: width - 4 }}
            key={cert}
          />
        );
      })}
    </Stack>
  );
};

export default CertificatesSlider;

import Box from "@mui/material/Box";

const ItemCertificate = ({
  imgSrc,
  isLast,
  is2ndLast,
}: {
  imgSrc: string;
  isLast: boolean;
  is2ndLast: boolean;
}) => {
  return (
    <Box
      component="img"
      src={imgSrc}
      sx={{
        maxWidth: 250,
        "&": {
          ml: { sm: isLast ? 0 : "12px !important", xl: 1.5 },
          mt: {
            sm: is2ndLast || isLast ? "12px !important" : 0,
            md: isLast ? "12px !important" : "0 !important",
            lg: "0 !important",
          },
        },
      }}
    ></Box>
  );
};

export default ItemCertificate;

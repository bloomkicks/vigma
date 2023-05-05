import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";

export const Bold = ({ children }: { children: React.ReactNode }) => (
  <Typography
    variant="inherit"
    component="span"
    display="inline"
    sx={{ fontWeight: "bold" }}
  >
    {children}
  </Typography>
);

const HeroDescription = () => {
  const isVerySmall = useMediaQuery("(max-width: 374px)");

  return (
    <>
      <Typography
        variant="h2"
        component="p"
        fontSize={
          isVerySmall
            ? "1.4rem"
            : {
                xs: "1.45rem",
                sm: "1.5rem",
                md: "1.55rem",
                lg: "1.85rem",
                xl: "1.9rem",
              }
        }
        lineHeight={1.3}
        fontWeight="400"
        position="relative"
        color="white"
        width="95%"
        mb={{ xs: 1.5, md: 2 }}
      >
        Акция{" "}
        <Typography variant="inherit" component="span" display="inline">
          <Bold>-40% </Bold>
          при заказе
          <Bold> до 15 мая</Bold> в честь юбилея компании
        </Typography>
      </Typography>
      <Typography
        position="relative"
        variant="h2"
        component="p"
        color="white"
        width="95%"
        fontSize={
          isVerySmall
            ? "1.4rem"
            : {
                xs: "1.45rem",
                sm: "1.5rem",
                md: "1.55rem",
                lg: "1.85rem",
                xl: "1.9rem",
              }
        }
        fontWeight="400"
      >
        Успейте оставить заявку ‒ получите
        <Bold> дизайн-проект</Bold>, <Bold> консультацию</Bold> и
        <Bold> подарок</Bold> на выбор
      </Typography>
    </>
  );
};

export default HeroDescription;

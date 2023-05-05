import { Bold } from "../hero/HeroDescription";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

const FreeOffer = ({
  sx,
  isAnother,
  onClick,
}: {
  sx?: any;
  isAnother?: boolean;
  onClick: () => void;
}) => {
  let mainColor = isAnother ? "#753030" : "#2E6290";
  let secColor = "white";
  let buttonHoverColor = isAnother ? "rgb(235,220,220)" : "rgb(220,220,235)";

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 475,
        px: { xs: 3.5, md: 5 },
        py: 4,
        pt: 4.75,
        position: "relative",
        textAlign: "left",
        overflow: "visible",
        borderRadius: "18px",
        bgcolor: mainColor,
        boxShadow: "1px 2px 4px rgba(0,0,0,0.3)",
        ...(sx || {}),
      }}
    >
      <Box
        position="absolute"
        left={{ xs: 25, md: 50 }}
        top="0%"
        sx={{
          px: 4.25,
          py: 1.25,
          bgcolor: secColor,
          transform: "translateY(-50%)",
          borderRadius: "100px",
          borderBottomLeftRadius: "5px",
          borderTopRightRadius: "5px",
          // boxShadow: "-1px -2px 4px rgba(0,0,0,0.3)",
          border: "5px solid",
          borderColor: mainColor,
        }}
      >
        <Typography
          sx={{
            color: mainColor,
            fontWeight: "bold",
            fontSize: "1.25rem",
          }}
        >
          ЭТО {isAnother ? "ВЫГОДНО!" : "БЕСПЛАТНО!"}
        </Typography>
      </Box>
      <Typography maxWidth={375} mx="auto" color={secColor}>
        {isAnother ? (
          <>
            Акция <Bold>-40%</Bold> при заказе <Bold>до 15 мая</Bold> в честь{" "}
            <Bold>6</Bold>-летия компании
          </>
        ) : (
          <>
            Получите <Bold>дизайн-проект</Bold>, <Bold>консультацию</Bold> и{" "}
            <Bold>подарок</Bold> на выбор
          </>
        )}
        <Button
          onClick={onClick}
          variant="contained"
          color="secondary"
          sx={{
            mt: 2.5,
            // ml: 'auto',
            bgcolor: secColor,
            color: mainColor,
            display: "flex",
            textTransform: "none",
            "&:hover, &:focus": {
              bgcolor: buttonHoverColor,
            },
          }}
        >
          {isAnother ? "Вызвать дизайнера" : "Оставить заявку"}
        </Button>
      </Typography>
    </Card>
  );
};

export default FreeOffer;

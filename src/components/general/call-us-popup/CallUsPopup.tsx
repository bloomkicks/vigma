import useMediaQuery from "@mui/material/useMediaQuery";
import Highlighter from "../Highlighter";
import CloseButton from "./CloseButton";
import PrivacyAgree from "../../pages/privacy/PrivacyAgree";
import PhoneForm from "./PhoneForm";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import Card from "@mui/material/Card";

const CallUsPopup = ({
  isStatic,
  open,
  onClose,
  title,
  sx,
}: {
  onClose?: () => void;
  title?: string;
  sx?: any;
  isStatic?: boolean;
  open?: boolean;
}) => {
  // const isSmall = useMediaQuery("(max-width: 376px)");
  const cardSx = {
    width: { xs: 350, sm: 370, md: 400, lg: 420 },
    px: { xs: 3.25, sm: 3.6, lg: 4 },
    py: { xs: 4.5, lg: 4.8 },
    position: "relative",
    backgroundImage: isStatic
      ? "linear-gradient(45deg, rgba(65, 65, 65, 0.78), rgba(50, 50, 50, 0.9) 55%, rgba(65, 65, 65, 0.78))"
      : "linear-gradient(45deg, rgba(60, 60, 60, 0.85), rgba(47, 47, 47, 0.9) 55%, rgba(60, 60, 60, 0.85))",
    backgroundColor: "transparent",
    borderRadius: "12px",
    boxShadow: "2px 4px 4px rgba(0,0,0,0.3)",
    minWidth: { md: 342, lg: 358 },
    mx: 2,
    ...(sx || {}),
  };
  const resultProps: any = { sx: {} };

  if (isStatic) {
    resultProps.sx["&"] = cardSx;
  } else {
    resultProps.sx["& .MuiPaper-root"] = cardSx;
    resultProps.onClose = onClose || function () {};
    resultProps.open = open;
  }

  const ParentElement = isStatic ? Card : Dialog;

  return (
    <ParentElement {...resultProps}>
      {!isStatic && <CloseButton onClick={onClose} />}
      <Typography
        position="relative"
        variant="h2"
        color="white"
        mb={1.5}
        sx={{
          fontSize: { xs: "2.4rem", sm: "2rem", lg: "2.25rem" },
          display: "inline-block",
          mr: "auto",
        }}
      >
        {title || "Оставить заявку"}
        <Highlighter
          lines={[
            { length: 82, opacity: 0.5 },
            { length: 91.5, opacity: 0.35 },
            { length: 100, opacity: 0.5 },
          ]}
          sx={{ width: "103%", height: 4, left: -1.5, bottom: -3 }}
        />
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "1.2rem", sm: "1.1rem", lg: "1.15rem" },
          color: "#D3D3D3",
          mb: { xs: 2.75, sm: 3.5 },
        }}
      >
        Заполните анкету и наш консультант позвонит вам в ближайшее время
      </Typography>
      <PhoneForm onClose={onClose} />
      <PrivacyAgree
        sx={{
          color: "#CDCDCD",
          "& a": {
            color: "#CDCDCD",
          },
          px: 2,
        }}
      />
    </ParentElement>
  );
};

export default CallUsPopup;

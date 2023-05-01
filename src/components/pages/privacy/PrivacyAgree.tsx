import Link from "next/link";
import Typography from "@mui/material/Typography";

const PrivacyAgree = ({ sx }: { sx?: any }) => {
  return (
    <Typography
      variant="body2"
      fontSize={{ xs: "13px", md: "15px", lg: "16px" }}
      textAlign="center"
      sx={{
        opacity: 0.75,
        ...(sx || {}),
      }}
    >
      Нажимая на кнопку, вы соглашаетесь с{" "}
      <Link href="/privacy" passHref>
        <Typography
          component="a"
          variant="body2"
          fontSize={{ xs: "13px", md: "15px", lg: "16px" }}
        >
          нашей политикой конфиденциальности
        </Typography>
      </Link>
    </Typography>
  );
};

export default PrivacyAgree;

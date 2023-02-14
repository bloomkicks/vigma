import Link from "next/link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const CallButton = () => {
  return (
    <Link href="tel:+7 (812) 642-60-51" passHref>
      <Button
        variant="contained"
        color="primary"
        sx={{
          borderRadius: "8px",
          fontSize: { xs: "14px", md: "16px" },
          lineHeight: 2.2,
          mr: { xs: 3, sm: 5, md: 0 },
          ml: { xs: "auto", md: 5 },
          mt: { xs: 0.15, md: 0 },
        }}
      >
        ПОЗВОНИТЬ
      </Button>
    </Link>
  );
};

export default CallButton;

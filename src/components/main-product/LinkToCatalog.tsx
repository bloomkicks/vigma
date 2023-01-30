import Link from "next/link";
import Typography from "@mui/material/Typography";

const LinkToCatalog = () => {
  return (
    <Link href="/catalog" passHref>
      <Typography
        component="a"
        variant="subtitle2"
        sx={{
          display: "inline-block",
          mx: "auto",
          textDecoration: "underline",
          mt: { xs: 8, md: 6 },
          "&:hover": {
            letterSpacing: "0.25px",
          },
        }}
      >
        Перейти в Каталог Кухонь
      </Typography>
    </Link>
  );
};

export default LinkToCatalog;

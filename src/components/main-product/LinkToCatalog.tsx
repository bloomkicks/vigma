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
          mt: 4.5,
        }}
      >
        Больше Выполненных Заказов
      </Typography>
    </Link>
  );
};

export default LinkToCatalog;

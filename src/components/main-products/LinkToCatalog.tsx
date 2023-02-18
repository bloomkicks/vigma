import Button from "@mui/material/Button";
import Link from "next/link";
import Typography from "@mui/material/Typography";

const LinkToCatalog = () => {
  return (
    <Link href="/catalog" passHref>
      <Button
        variant="outlined"
        color="info"
        component="a"
        sx={{
          mt: { xs: 6.5, md: 4 },
          mx: "auto",
        }}
      >
        Смотреть весь каталог
      </Button>
    </Link>
  );
};

export default LinkToCatalog;

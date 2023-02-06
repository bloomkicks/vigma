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
          mt: { xs: 8, md: 6 },
          mx: "auto",
        }}
      >
        Перейти в Каталог Кухонь
      </Button>
    </Link>
  );
};

export default LinkToCatalog;

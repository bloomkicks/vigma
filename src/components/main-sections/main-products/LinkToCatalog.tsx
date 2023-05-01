import Button from "@mui/material/Button";
import Link from "next/link";

const LinkToCatalog = () => {
  return (
    <Link href="/catalog" passHref>
      <Button
        variant="outlined"
        color="info"
        component="a"
        sx={{
          mt: { xs: 4.5, md: 4 },
          mx: "auto",
          py: 1.5,
          px: 3.75,
          fontSize: '1.25rem',
          borderRadius: '8px'
        }}
      >
        СМОТРЕТЬ ВСЕ КУХНИ
      </Button>
    </Link>
  );
};

export default LinkToCatalog;

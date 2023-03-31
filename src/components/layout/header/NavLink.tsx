import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";

const NavLink = (props) => {
  const router = useRouter();
  const { isBlack, img, href, children, sx, ...linkProps } = props;
  const isActive = router.asPath === href;

  return (
    <Link href={href || "/error"} passHref>
      <Button
        component="a"
        variant="text"
        sx={{
          px: 2.5,
          py: 1,
          borderRadius: { xs: "5px", md: 0 },
          "&:hover": {
            bgcolor: (theme) => theme.palette.primary.dark + "3a",
          },
          ...sx,
        }}
      >
        <Typography
          variant="h6"
          color={isActive ? "primary.main" : "secondary.main"}
          sx={{
            textTransform: "capitalize",
            fontSize: { xs: "1.6rem", md: "1.3rem" },
            fontWeight: "500",
          }}
        >
          {children}
        </Typography>
      </Button>
    </Link>
  );
};

export default NavLink;
import Button from "@mui/material/Button";
import Link from "next/link";

const OrderButton = (props) => {
  return (
    <Link href="/order" passHref>
      <Button
        component="a"
        variant="contained"
        sx={{ alignSelf: "center", mt: 2 }}
      >
        Рассчитать
      </Button>
    </Link>
  );
};

export default OrderButton;

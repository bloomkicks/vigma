import Image from "next/image";
import Box from "@mui/material/Box";

let crossSrc = process.env.GENERAL_ASSETS + "/black-cross.svg";

const CloseCross = ({
  clickHandler,
  sx,
}: {
  clickHandler: () => void;
  sx?: any;
}) => {
  return (
    <Box
      component="button"
      position="relative"
      width={30}
      height={28}
      sx={{
        border: "none",
        bgcolor: "transparent",
        "&:hover, &:focus": {
          outline: "none",
        },
        ...(sx || {}),
      }}
      onClick={clickHandler}
    >
      <Image
        src={crossSrc}
        alt="Закрыть форму"
        title="Закрыть форму"
        loading="eager"
        width={30}
        height={28}
      />
    </Box>
  );
};

export default CloseCross;

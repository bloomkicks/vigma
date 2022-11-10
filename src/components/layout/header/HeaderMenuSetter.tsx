import Image from "next/image";
import Box from "@mui/material/Box";

let hamMenuSrc = process.env.GENERAL_ASSETS + "/nav-ham-menu.svg";
let crossSrc = process.env.GENERAL_ASSETS + "/nav-cross.svg";

const HeaderMenuSetter = ({
  isActive,
  toggleMenuHandler,
}: {
  isActive: boolean;
  toggleMenuHandler: (e: any) => void;
}) => {
  return !isActive ? (
    <Box
      position="relative"
      width={31.5}
      height={23}
      sx={{
        display: { xs: "block", md: "none" },
        mr: 1,
        "&:hover, &:focus": {
          outline: "none",
          transform: "scaleY(1.15)",
        },
      }}
    >
      <Image
        src={hamMenuSrc}
        alt="Открыть меню"
        title="Открыть меню"
        layout="fill"
        loading="eager"
        onClick={toggleMenuHandler}
      />
    </Box>
  ) : (
    <Box
      position="relative"
      width={24.05}
      height={23}
      sx={{
        display: { xs: "block", md: "none" },
        mr: 1,
        "&:hover, &:focus": {
          outline: "none",
          transform: "scaleX(1.15)",
        },
      }}
    >
      <Image
        src={crossSrc}
        alt="Закрыть меню"
        title="Закрыть меню"
        layout="fill"
        loading="eager"
        onClick={toggleMenuHandler}
      />
    </Box>
  );
};

export default HeaderMenuSetter;

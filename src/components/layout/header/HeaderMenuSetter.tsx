import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const HeaderMenuSetter = ({
  isActive,
  toggleMenuHandler,
}: {
  isActive: boolean;
  toggleMenuHandler: (e: any) => void;
}) => {
  return (
    <Box
      component="button"
      aria-label="Открыть меню"
      position="relative"
      sx={{
        border: "none",
        bgcolor: "transparent",
        display: { xs: "block", md: "none" },
        transition: "transform 50ms ease-out",
        mr: 1,
        "&:hover > div, &:focus > div": {
          outline: "none",
          transform: "scaleX(1.1)",
        },
        p: "4px",
        px: 1,
      }}
      onClick={toggleMenuHandler}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing="6px"
        width={32}
        sx={{
          transition: "transform 50ms ease-out",
        }}
      >
        {[1, 2, 3].map((n) => (
          <Box
            key={"menu-setter-" + n}
            sx={{
              height: 3,
              width: isActive ? 30 : "100%",
              bgcolor: "white",
              transition: "transform 300ms ease-out",
              transform: isActive
                ? `translate(${
                    n === 2 ? "200px, 0" : n === 1 ? "0%, 300%" : "0%, -300%"
                  }) rotate(${n === 1 ? "-45deg" : n === 3 ? "45deg" : "0deg"})`
                : "",
            }}
          ></Box>
        ))}
      </Stack>
    </Box>
  );
  // (
  //   <Box
  //     component="button"
  //     position="relative"
  //     width={24.05}
  //     height={23}
  //     sx={{
  //       border: "none",
  //       bgcolor: "transparent",
  //       display: { xs: "block", md: "none" },
  //       mr: 1,
  //       "&:hover, &:focus": {
  //         outline: "none",
  //         transform: "scaleX(1.1)",
  //       },
  //     }}
  //     onClick={toggleMenuHandler}
  //   >
  //     <Image
  //       src={crossSrc}
  //       alt="Закрыть меню"
  //       title="Закрыть меню"
  //       layout="fill"
  //       loading="eager"
  //     />
  //   </Box>
  // );
};

export default HeaderMenuSetter;

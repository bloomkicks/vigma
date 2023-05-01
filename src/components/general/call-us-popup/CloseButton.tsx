import Box from "@mui/material/Box";

const CloseButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Box
      component="button"
      onClick={onClick}
      sx={{
        width: { xs: 28, md: 32 },
        height: { xs: 28, md: 32 },
        borderRadius: 50,
        bgcolor: "#828282",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 17,
        right: 17,
        "&:hover, &:focus": {
          bgcolor: "rgba(130, 130, 130, 0.8)",
        },
      }}
    >
      {[1, 2].map((n) => (
        <Box
          key={"cross-line" + n}
          sx={{
            width: { xs: 16, md: 19 },
            flexShrink: 0,
            height: { xs: 2.5, sm: 2.75 },
            bgcolor: "#FFFFFF",
            transform: ` translateX(${n === 1 ? "" : "-"}50%) 
           rotate(${n === 1 ? "" : "-"}45deg) `,
          }}
        ></Box>
      ))}
    </Box>
  );
};

export default CloseButton;

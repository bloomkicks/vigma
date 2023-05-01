import Button from "@mui/material/Button";

const CallUsButton = ({ sx, onClick }: { onClick: () => void; sx?: any }) => {
  return (
    <Button
      onClick={onClick}
      variant="outlined"
      color="secondary"
      sx={{
        alignSelf: "flex-start",
        borderRadius: "8px",
        width: "80%",
        maxWidth: { xs: 300, sm: 350 },
        fontSize: "1.25rem",
        color: "secondary.light",
        borderColor: "secondary.light",
        py: 1.25,
        px: 4.25,
        "&:hover, &:focus": {
          color: "rgb(171, 228, 241)",
          borderColor: "rgb(171, 228, 241)",
          bgcolor: "rgba(125,125,125,0.2)",
        },
        bgcolor: "rgba(125,125,125,0.15)",
        backdropFilter: "blur(1px)",
        ...sx,
      }}
    >
      Оставить заявку
    </Button>
  );
};

export default CallUsButton;

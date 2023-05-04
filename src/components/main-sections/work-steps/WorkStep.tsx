import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const WorkStep = ({
  imgSrc,
  description,
  index,
}: {
  imgSrc: string;
  description: string;
  index: number;
}) => {
  return (
    <Stack
      direction={{ xs: "row", md: "column" }}
      // alignItems={{ xs: "flex-start", md: "center" }}
      alignItems="center"
      spacing={{ xs: 1.75, md: 1.5 }}
      width={{ xs: "100%", md: index >= 4 ? "33%" : "30%" }}
      sx={{
        textAlign: { xs: "left", md: "center" },
        mb: index >= 4 ? { md: "0 !important" } : "",
      }}
    >
      <Box
        component="img"
        src={imgSrc}
        alt={description.split(" ").slice(2).join(" ")}
        width={{ xs: 71, sm: 75, md: 100, lg: 103 }}
        height="auto"
      />
      <Typography
        sx={{
          fontSize: { xs: "1.45rem", md: "1.35rem" },
        }}
      >
        <span style={{ fontWeight: "bold" }}>{index}</span>. {description}
      </Typography>
    </Stack>
  );
};

export default WorkStep;

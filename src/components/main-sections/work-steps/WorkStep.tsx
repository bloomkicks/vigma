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
      width={{ xs: "100%", md: "30%" }}
      sx={{ textAlign: { xs: "left", md: "center" } }}
    >
      <Box
        component="img"
        src={imgSrc}
        alt={description.split(" ").slice(2).join(" ")}
        width={{ xs: 71, sm: 75, md: "116.5px" }}
        height="auto"
      />
      <Typography pb={{ xs: '2px', md: 0 }}>
        <span style={{ fontWeight: "bold" }}>{index}</span>. {description}
      </Typography>
    </Stack>
  );
};

export default WorkStep;

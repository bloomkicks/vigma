import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ItemAdvantage = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Box textAlign="left">
      <Typography variant="h3" mb={1.25}>
        {title}
      </Typography>
      <Typography>{description}</Typography>
    </Box>
  );
};

export default ItemAdvantage;

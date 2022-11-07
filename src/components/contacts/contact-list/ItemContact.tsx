import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ItemContact = ({
  contact,
  value,
  link,
  isColumn,
  sx,
}: {
  contact: string;
  value: string;
  link: string;
  isColumn?: boolean;
  sx?: any;
}) => {
  const isLink = link !== "none";

  return (
    <Box textAlign="left" sx={sx}>
      <Typography
        variant="h3"
        display={isColumn ? "block" : "inline-block"}
        mr={isColumn ? 0 : 1.9}
        mb={isColumn ? 1.9 : 0}
      >
        {contact}:
      </Typography>

      <Typography
        component={isLink ? "a" : "p"}
        variant="subtitle2"
        href={link}
        display="inline-block"
        sx={{ fontSize: 26, lineHeight: "30px" }}
      >
        {value}
      </Typography>
    </Box>
  );
};

export default ItemContact;

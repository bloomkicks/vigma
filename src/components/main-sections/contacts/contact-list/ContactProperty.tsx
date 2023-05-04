import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ContactProperty = ({
  contact,
  value,
  link,
  isColumn,
  sx,
}: {
  contact: string;
  value: string | React.ReactNode;
  link: string;
  isColumn?: boolean;
  sx?: any;
}) => {
  const isEmail = link.includes("mailto");
  const isLink = link !== "none";

  return (
    <Box textAlign="left" sx={sx}>
      <Typography
        fontWeight="500"
        fontSize="1.4rem"
        display={isColumn ? "block" : "inline-block"}
        mr={{ xs: 1, md: isColumn ? 0 : 1.5 }}
        mb={{ xs: 0.5, md: isColumn ? 1 : 0 }}
        title={(isEmail && "Электронная почта") || ""}
      >
        {contact}:
      </Typography>
      <Typography
        fontSize="1.4rem"
        component={isLink ? "a" : "p"}
        href={link}
        display="inline-block"
        sx={{
          lineHeight: 1.185,
          textDecoration: isLink ? "underline" : "none",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

export default ContactProperty;

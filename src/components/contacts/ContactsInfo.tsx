import ItemContact from "./contact-list/ItemContact";
import ListContact from "./contact-list/ListContact";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ContactsInfo = ({ sx }: { sx?: any }) => {
  return (
    <Box component="section" sx={sx}>
      <ListContact />
      <ItemContact
        contact="Производство"
        value={
          <>
            <Typography
              variant="subtitle2"
              component="span"
              sx={{ fontSize: "1.625rem", display: "inline-block", mr: 1.2 }}
            >
              г. Санкт-Петербург,
            </Typography>
            <Typography
              variant="subtitle2"
              component="span"
              sx={{ fontSize: "1.625rem", display: "inline-block", mr: 1.2 }}
            >
              ул. Автобусная,
            </Typography>
            <Typography
              component="span"
              variant="subtitle2"
              sx={{ fontSize: "1.625rem", display: "inline-block" }}
            >
              д. 3
            </Typography>
          </>
        }
        link="none"
        isColumn
        sx={{ mt: { xs: 4, md: 7 } }}
      />
    </Box>
  );
};

export default ContactsInfo;

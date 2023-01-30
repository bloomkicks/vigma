import ItemContact from "./contact-list/ItemContact";
import Typography from "@mui/material/Typography";
import ContactList from "./contact-list/ContactList";
import Box from "@mui/material/Box";

const ContactsInfo = ({ sx }: { sx?: any }) => {
  return (
    <Box component="section" sx={sx}>
      <ContactList />
      <ItemContact
        contact="Производство"
        value={
          <>
            <Typography
              component="span"
              sx={{ display: "inline-block", mr: 1.2 }}
            >
              г. Санкт-Петербург,
            </Typography>
            <Typography
              component="span"
              sx={{ display: "inline-block", mr: 1.2 }}
            >
              ул. Автобусная,
            </Typography>
            <Typography component="span" sx={{ display: "inline-block" }}>
              д. 3
            </Typography>
          </>
        }
        link="none"
        isColumn
        sx={{ mt: { xs: 2.5, md: 4.5 } }}
      />
    </Box>
  );
};

export default ContactsInfo;

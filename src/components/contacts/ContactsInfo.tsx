import Socials from "../layout/footer/Socials";
import ItemContact from "./contact-list/ItemContact";
import Typography from "@mui/material/Typography";
import ContactList from "./contact-list/ContactList";
import Box from "@mui/material/Box";

const ContactsInfo = ({ sx }: { sx?: any }) => {
  return (
    <Box component="section" sx={sx}>
      <ContactList sx={{ mb: { xs: 2.5, md: 3 } }} />
      <Socials sx={{ mb: { xs: 5, md: 7 } }} />
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
              д. 3В
            </Typography>
          </>
        }
        link="none"
        isColumn
      />
    </Box>
  );
};

export default ContactsInfo;

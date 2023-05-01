import Socials from "../../layout/footer/Socials";
import ItemContact from "./contact-list/ItemContact";
import Typography from "@mui/material/Typography";
import ContactList from "./contact-list/ContactList";
import Box from "@mui/material/Box";

const ContactsInfo = ({ sx }: { sx?: any }) => {
  return (
    <Box component="section" sx={sx}>
      <ContactList sx={{ mb: { xs: 2, md: 3 } }} />
      <Socials
        sx={{
          mb: { xs: 3, sm: 4, md: 7 },
          "& img": { boxShadow: "1px 1.5px 4px rgba(0,0,0,0.4)" },
        }}
      />
      <ItemContact
        contact="Производство"
        value={
          <>
            <Typography
              component="span"
              fontSize="1.4rem"
              sx={{ display: "inline-block", mr: { xs: 1.1, md: 1.2 } }}
            >
              г. Санкт-Петербург,
            </Typography>
            <Typography
              fontSize="1.4rem"
              component="span"
              sx={{ display: "inline-block", mr: { xs: 1.1, md: 1.2 } }}
            >
              ул. Автобусная,
            </Typography>
            <Typography
              fontSize="1.4rem"
              component="span"
              sx={{ display: "inline-block" }}
            >
              д. 3
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

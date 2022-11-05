import ItemContact from "./contact-list/ItemContact";
import ListContact from "./contact-list/ListContact";
import Box from "@mui/material/Box";

const ContactsInfo = ({ sx }: { sx?: any }) => {
  return (
    <Box component="section" sx={sx}>
      <ListContact />
      <ItemContact
        contact="Производство"
        value="г. Санкт-Петербург, ул. Автобусная, д. 3"
        link="none"
        isColumn
        sx={{ mt: 5 }}
      />
    </Box>
  );
};

export default ContactsInfo;

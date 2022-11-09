import ItemContact from "./contact-list/ItemContact";
import ListContact from "./contact-list/ListContact";
import Box from "@mui/material/Box";

const ContactsInfo = ({ sx }: { sx?: any }) => {
  return (
    <Box component="section" sx={sx}>
      <ListContact />
      <ItemContact
        contact="Производство"
        value={
          <>
            <Box display="inline-block" mr={1.2}>
              г. Санкт-Петербург,
            </Box>
            <Box display="inline-block" mr={1.2}>
              ул. Автобусная,
            </Box>
            <Box display="inline-block">д. 3</Box>
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

import ItemContact from "./contact-list/ItemContact";
import ListContact from "./contact-list/ListContact";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Contacts = () => {
  return (
    <Box
      id="contacts"
      component="section"
      sx={{
        bgcolor: "secondary.main",
        px: 15,
      }}
    >
      <Typography variant="h2">Наши контакты</Typography>
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

export default Contacts;

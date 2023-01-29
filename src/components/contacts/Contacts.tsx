import ItemContact from "./contact-list/ItemContact";
import ContactsMap from "./ContactsMap";
import ContactsInfo from "./ContactsInfo";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const Contacts = () => {
  return (
    <Box
      component="article"
      id="contacts"
      sx={{
        bgcolor: "secondary.main",
      }}
    >
      <Typography variant="h2">Наши контакты</Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        spacing={{ xs: 3, lg: 7 }}
        sx={{ height: { xs: "auto", md: 410 } }}
        mb={5}
      >
        <ContactsInfo
          sx={{
            width: { xs: "100%", md: "53%", lg: "48%" },
            minWidth: { md: 485 },
          }}
        />
        <ContactsMap
          sx={{
            width: { xs: "100%", md: "43%", lg: "48%" },
            height: { xs: 380, md: "100%" },
            minHeight: { xs: 380, md: 410 },
          }}
        />
      </Stack>
      <ItemContact
        contact="ИНН"
        value="292501389176"
        link="none"
        sx={{ display: "inline-block", mr: 5 }}
      />
      <ItemContact
        contact="ОРГН"
        value="319290100012218"
        link="none"
        sx={{ display: "inline-block", mr: "auto" }}
      />
    </Box>
  );
};

export default Contacts;

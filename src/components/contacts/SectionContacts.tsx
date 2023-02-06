import ItemContact from "./contact-list/ItemContact";
import ContactsMap from "./ContactsMap";
import ContactsInfo from "./ContactsInfo";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const SectionContacts = () => {
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
        direction={{ xs: "column", md: "row-reverse" }}
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 3, lg: 3 }}
        mb={{ xs: 2.5, md: 5 }}
      >
        <ContactsInfo
          sx={{
            width: { xs: "100%", sm: "80%", md: "45%", lg: 450 },
            minWidth: { md: 390 },
            mb: { md: 1, lg: 1.5 },
          }}
        />
        <ContactsMap
          sx={{
            width: { xs: "100%", md: "44%" },
            height: { xs: 320, sm: 300, md: 340, lg: 360 },
            // minHeight: { xs: 380, sm: 300, md: 280 },
            maxWidth: 450,
          }}
        />
      </Stack>
    </Box>
  );
};

export default SectionContacts;

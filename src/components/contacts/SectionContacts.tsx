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
        spacing={{ xs: 3, lg: 4 }}
        sx={
          {
            // height: { xs: "auto", md: 410 },
          }
        }
        mb={{ xs: 2.5, md: 5 }}
      >
        <ContactsInfo
          sx={{
            width: { xs: "100%", sm: "80%", md: "45%", lg: 450 },
            minWidth: { md: 390 },
            mb: { xs: 0, md: 2, lg: 4 },
          }}
        />
        <ContactsMap
          sx={{
            width: { xs: "100%", md: "43%" },
            height: { xs: 320, sm: 300, md: 340, lg: 350 },
            // minHeight: { xs: 380, sm: 300, md: 280 },
            maxWidth: 450,
          }}
        />
      </Stack>
      <Stack
        direction="row"
        display={{ xs: "none", md: "flex" }}
        justifyContent="center"
        spacing={{ xs: 1, md: 3, lg: 4.5 }}
      >
        <ItemContact contact="ОРГНИП" value="319290100012218" link="none" />
        <ItemContact contact="ИНН" value="292501389176" link="none" />
      </Stack>
    </Box>
  );
};

export default SectionContacts;

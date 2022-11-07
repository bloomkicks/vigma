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
        px: 15,
      }}
    >
      <Typography variant="h2">Наши контакты</Typography>
      <Stack
        direction="row"
        justifyContent="center"
        spacing={7}
        sx={{ height: 410 }}
      >
        <ContactsInfo sx={{ width: "48%" }} />
        <ContactsMap sx={{ width: "48%", height: "100%" }} />
      </Stack>
    </Box>
  );
};

export default Contacts;

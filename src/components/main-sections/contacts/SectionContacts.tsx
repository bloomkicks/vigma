import dynamic from "next/dynamic";
import YaMapSceleton from "./YaMapSceleton";
import ContactsInfo from "./ContactsInfo";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const ContactsMap = dynamic(() => import("./YaMap"), {
  loading: YaMapSceleton,
});

const SectionContacts = () => {
  return (
    <Box component="article" id="contacts">
      <Typography variant="h2">Наши контакты</Typography>
      <Stack
        direction={{ xs: "column", md: "row-reverse" }}
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 3, lg: 3 }}
      >
        <ContactsInfo
          sx={{
            width: { xs: "100%", sm: "80%", md: "45%", lg: 450 },
            minWidth: { md: 390 },
            mb: { mb: 0.25, lg: 1.6 },
          }}
        />
        <ContactsMap
          sx={{
            width: { xs: "100%", md: "44%" },
            height: { xs: 300, sm: 300, md: 340, lg: 360 },
            // minHeight: { xs: 380, sm: 300, md: 280 },
            maxWidth: { xs: 400, lg: 450 },
          }}
        />
      </Stack>
    </Box>
  );
};

export default SectionContacts;

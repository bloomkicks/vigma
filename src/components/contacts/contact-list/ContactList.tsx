import Typography from "@mui/material/Typography";
import ItemContact from "./ItemContact";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

let contacts = [
  {
    contact: "Номер Телефона",
    value: "+7 (812) 642-60-51",
    link: "tel:+7 (812) 642-60-51",
  },
  {
    contact: "WhatsApp",
    value: "+7 (964) 342-60-51",
    link: "tel:+7 (964) 342-60-51",
  },
  {
    contact: "ВКонтакте",
    value: "vk.com/vigmaspb",
    link: "https://vk.com/vigmaspb",
  },
  // {
  //   contact: "Адрес Эл. Почты",
  //   value: "vigmaspb@gmail.com",
  //   link: "mailto:vigmaspb@gmail.com",
  // },
  {
    contact: "Имя Менеджера",
    value: "Филатова Галина",
    link: "none",
  },
  // {
  //   contact: "ОРГНИП",
  //   value: "319290100012218",
  //   link: "none",
  // },
  // {
  //   contact: "ИНН",
  //   value: "292501389176",
  //   link: "none",
  // },
];

const ContactList = ({ sx }: { sx?: any }) => {
  return (
    <Stack spacing={{ xs: 2.5, md: 3.5 }} sx={{ textAlign: "left", ...sx }}>
      {contacts.map((contact) => (
        <ItemContact {...contact} key={contact.contact} />
      ))}
      <Box display={{ xs: "block", md: "none" }}>
        <Typography mb={1}>ОГРНИП: 319290100012218</Typography>
        <Typography>ИНН: 292501389176</Typography>
      </Box>
      {/* <ItemContact
        contact="ОРГНИП"
        value="319290100012218"
        link="none"
        sx={{ mb: 0 }}
      />
      <ItemContact contact="ИНН" value="292501389176" link="none" /> */}
    </Stack>
  );
};

export default ContactList;

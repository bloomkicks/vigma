import Typography from "@mui/material/Typography";
import ItemContact from "./ItemContact";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

let contacts = [
  {
    contact: "Телефон",
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
    contact: "Менеджер",
    value: "Галина Филатова",
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
    <Stack spacing={{ xs: 2.5, md: 3.25 }} sx={{ textAlign: "left", ...sx }}>
      {contacts.map((contact) => (
        <ItemContact {...contact} key={contact.contact} />
      ))}
    </Stack>
  );
};

export default ContactList;

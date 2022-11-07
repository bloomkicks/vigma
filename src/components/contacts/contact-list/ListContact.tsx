import ItemContact from "./ItemContact";
import Stack from "@mui/material/Stack";

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
  {
    contact: "Адрес Эл. Почты",
    value: "vigmaspb@gmail.com",
    link: "mailto:vigmaspb@gmail.com",
  },
  {
    contact: "Имя Менеджера",
    value: "Филатова Галина",
    link: "none",
  },
];

const ListContact = ({ sx }: { sx?: any }) => {
  return (
    <Stack spacing={{ xs: 3.9, md: 3.8 }} sx={sx}>
      {contacts.map((contact) => (
        <ItemContact {...contact} key="contact.contact" />
      ))}
    </Stack>
  );
};

export default ListContact;

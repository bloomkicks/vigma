import ContactProperty from "./ContactProperty";
import Stack from "@mui/material/Stack";

let contacts = [
  {
    contact: "Телефон",
    value: "+7 (812) 642-60-51",
    link: "tel:+7(812)642-60-51",
  },
  {
    contact: "Эл. Почта",
    value: "vigmaspb@gmail.com",
    link: "mailto:vigmaspb@gmail.com",
  },
  {
    contact: "Менеджер",
    value: "Галина Филатова",
    link: "none",
  },
];

const ContactPropertyList = ({ sx }: { sx?: any }) => {
  return (
    <Stack spacing={{ xs: 2, md: 2.5 }} sx={{ textAlign: "left", ...sx }}>
      {contacts.map((contact) => (
        <ContactProperty {...contact} key={contact.contact} />
      ))}
    </Stack>
  );
};

export default ContactPropertyList;

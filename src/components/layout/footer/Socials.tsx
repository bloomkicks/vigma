import Link from "next/link";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

let socials = [
  {
    imgName: "/vk.png",
    title: "ВКонтакте",
    link: "https://vk.com/vigmaspb",
  },
  {
    imgName: "/whatsapp.png",
    title: "WhatsApp",
    link: "https://wa.me/79643426051",
  },
  {
    imgName: "/telegram.png",
    title: "Телеграм",
    link: "https://t.me/vigmamebel",
  },
  {
    imgName: "/gmail.png",
    title: "Эл. Почта",
    link: "mailto:vigmaspb@gmail.com",
  },
];

const Socials = ({ sx }: { sx: any }) => {
  return (
    <Stack direction="row" spacing={2} height={{ xs: 55, sm: 60 }} sx={sx}>
      {socials.map((social) => (
        <Link href={social.link} key={social.title}>
          <Box
            component="img"
            src={process.env.SOCIAL_ASSETS + social.imgName}
            alt={social.title}
            title={social.title}
            sx={{
              width: "auto",
              height: "100%",
              borderRadius: "10px",
              boxShadow: "2px 2.5px 4px rgba(0,0,0,0.45)",
            }}
          ></Box>
        </Link>
      ))}
    </Stack>
  );
};

export default Socials;

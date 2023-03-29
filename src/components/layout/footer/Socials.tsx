import Link from "next/link";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

let socials = [
  {
    imgName: "/vk",
    title: "ВКонтакте",
    link: "https://vk.com/vigmaspb",
  },
  {
    imgName: "/whatsapp",
    title: "WhatsApp",
    link: "https://wa.me/79643426051",
  },
  {
    imgName: "/telegram",
    title: "Телеграм",
    link: "https://t.me/vigmamebel",
  },
  {
    imgName: "/gmail",
    title: "Эл. Почта",
    link: "mailto:vigmaspb@gmail.com",
  },
];

const Socials = ({ sx, isWhite }: { sx: any; isWhite?: boolean }) => {
  return (
    <Stack direction="row" spacing={2} height={{ xs: 50, sm: 58 }} sx={sx}>
      {socials.map((social) => (
        <Link href={social.link} key={social.title} passHref>
          <Box
            component="a"
            width="min-content"
            sx={{
              height: "100%",
              width: "auto",
              display: "block",
            }}
          >
            <Box
              component="img"
              src={
                process.env.SOCIAL_ASSETS +
                social.imgName +
                (isWhite ? "-white.png" : ".png")
              }
              alt={social.title}
              title={social.title}
              sx={{
                width: "auto",
                height: "100%",
                borderRadius: "12.5px",
                boxShadow: "1px 1.5px 4px rgba(0,0,0,0.6)",
                userSelect: "none",
              }}
            ></Box>
          </Box>
        </Link>
      ))}
    </Stack>
  );
};

export default Socials;

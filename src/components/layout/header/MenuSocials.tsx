import Link from "next/link";
import Grid from "@mui/material/Grid";
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

const MenuSocials = () => {
  let iconWidth = 50;
  let spacing = 32;
  return (
    <Grid
      container
      display={{ xs: "flex", md: "none" }}
      mt={8}
      width={(iconWidth + spacing) * 2 + 4}
      justifyContent="center"
      alignItems="center"
      spacing={spacing + "px"}
      rowSpacing={spacing - 8 + "px"}
    >
      {socials.map((social) => (
        <Link href={social.link} key={social.title} passHref>
          <Grid item xs={6} component="a" maxWidth={iconWidth + spacing}>
            <Box
              component="img"
              src={process.env.SOCIAL_ASSETS + social.imgName + "-white.png"}
              alt={social.title}
              title={social.title}
              width={iconWidth + (social.imgName === "/vk" ? 4 : 0)}
              sx={{ userSelect: "none" }}
            ></Box>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
};

export default MenuSocials;

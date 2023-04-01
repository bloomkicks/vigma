import { useState } from "react";
import ContactForm from "../contact-form/ContactForm";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

let buttons: any[] = [
  {
    link: "/main#quiz-start",
    title: "РАССЧИТАТЬ СТОИМОСТЬ",
    sx: {
      px: { sm: 4 },
    },
    onClick: () => {
      const quizDivider = document.getElementById("quiz-start");
      quizDivider.scrollIntoView({ behavior: "smooth", block: "start" });
    },
  },
  {
    link: "/main#contacts-start",
    title: "СВЯЗАТЬСЯ С НАМИ",
    sx: {
      bgcolor: "rgba(255,255,255,90%)",
      px: { xs: 5, sm: 6.5 },
      "&:hover": {
        bgcolor: "rgba(205,205,205,90%)",
      },
    },
  },
];
const ButtonChoice = () => {
  const isReallySmall = useMediaQuery("(max-width: 374px)");
  const [isOpen, setIsOpen] = useState(false);
  buttons[1].onClick = () => setTimeout(() => setIsOpen(true), 100);

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 2.2, sm: 3, md: 4.5 }}
      alignItems={{ xs: "stretch", sm: "center" }}
      justifyContent="center"
      sx={{
        width: "fit-content",
        mx: "auto",
        mb: { xs: 1, md: 3 },
      }}
    >
      {buttons.map((button) => (
        <Link href={button.link} passHref key={button.link}>
          <Button
            component="a"
            variant="contained"
            onClick={button.onClick || function () {}}
            sx={{
              lineHeight: isReallySmall ? 1.1 : { xs: 3, sm: 3 },
              flexShrink: 0,
              fontSize: { xs: "1.1rem", sm: "1.05rem", md: "1.1rem" },
              padding: isReallySmall ? "14px 35px" : "",
              borderRadius: "10px",
              boxShadow: "2px 4px 4px rgba(0,0,0,0.3)",
              ...button.sx,
            }}
          >
            {button.title}
          </Button>
        </Link>
      ))}
      <ContactForm open={isOpen} onClose={() => setIsOpen(false)} />
    </Stack>
  );
};

export default ButtonChoice;

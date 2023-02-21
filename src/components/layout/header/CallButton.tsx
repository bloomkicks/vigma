import { useState } from "react";
import ContactForm from "../../contact-form/ContactForm";
import Button from "@mui/material/Button";

const CallButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ContactForm open={isOpen} onClose={() => setIsOpen(false)} />
      <Button
        onClick={() => setIsOpen(true)}
        variant="contained"
        color="primary"
        sx={{
          borderRadius: "8px",
          fontSize: { xs: "14px", md: "16px" },
          lineHeight: 2.2,
          mr: { xs: 3, sm: 5, md: 0 },
          ml: { xs: "auto", md: 5 },
          mt: { xs: 0.15, md: 0 },
        }}
      >
        ПОЗВОНИТЬ
      </Button>
    </>
  );
};

export default CallButton;

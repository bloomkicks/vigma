import { useState } from "react";
import CallUsPopup from "../../general/call-us-popup/CallUsPopup";
import Button from "@mui/material/Button";

const MenuCallButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <ContactForm open={isOpen} onClose={() => setIsOpen(false)} /> */}
      <CallUsPopup
        open={isOpen}
        onClose={() => setIsOpen(false)}
        isStatic={false}
      />
      <Button
        onClick={() => setIsOpen(true)}
        variant="outlined"
        color="secondary"
        sx={{
          borderRadius: "8px",
          fontSize: { xs: "14px", md: "16px" },
          lineHeight: 2.2,
          mr: { xs: 2.5, sm: 5, md: 0 },
          ml: { xs: "auto", md: 5 },
          mt: { xs: 0.15, md: 0 },
          padding: "1px 14px",
        }}
      >
        ПОЗВОНИТЬ
      </Button>
    </>
  );
};

export default MenuCallButton;

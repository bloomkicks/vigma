import sendContacts from "../../features/order-form/send-contacts";
import CloseCross from "./CloseCross";
import ContactInfoDialogs from "./ContactInfoDialogs";
import useForm from "../../hooks/use-form";
import { useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import PrivacyAgree from "../privacy/PrivacyAgree";
import ContactTextFields from "./ContactTextFields";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";

const ContactForm = ({
  onClose,
  open,
}: {
  onClose: () => void;
  open?: boolean;
}) => {
  const [isValid, setIsValid] = useState(false);
  const phoneRef = useRef({ value: "" }) as { current: HTMLInputElement };
  const nameRef = useRef({ value: "" }) as { current: HTMLInputElement };

  async function onSubmit() {
    await sendContacts({
      phone: phoneRef.current.value,
      name: nameRef.current.value,
    });
    try {
      (window as any).ym(90359214, "reachGoal", "contacts_sent");
    } catch (err) {
      console.log(
        "[Данные для аналитики]: Ошибка с отправкой Яндекс цели - contacts_sent",
      );
    }
  }

  function phoneChangeHandler(e: any) {
    const number = e.target.value.replaceAll(/[^\d]/g, "");
    setIsValid(number.length >= 11);
  }

  const { submitHandler, isSuccess, isLoading, error, clearState } = useForm({
    onSubmit,
    isValid,
  });

  return (
    <>
      <ContactInfoDialogs
        isSuccess={isSuccess}
        isLoading={isLoading}
        error={error}
        open={isSuccess || !!error}
        onClose={() => {
          clearState();
          onClose();
          setIsValid(false);
        }}
      />
      <Dialog
        open={open}
        onClose={onClose}
        sx={{
          "& .MuiPaper-root": {
            mx: { xs: 2, sm: null },
          },
        }}
      >
        <Box
          component="form"
          method="POST"
          onSubmit={submitHandler}
          sx={{
            px: 1.5,
            pr: 1.7,
            py: 3,
            pt: { xs: 5, md: 4.2 },
            position: "relative",
          }}
        >
          <CloseCross
            clickHandler={onClose}
            sx={{
              position: "absolute",
              top: 17,
              right: { xs: 13, sm: 15 },
              opacity: 0.9,
              width: { xs: 30, sm: 40 },
              height: { xs: 29, sm: 38 },
              px: { xs: 0.5, sm: 1 },
              py: { xs: 0.5, sm: 1 },
            }}
          />
          <Typography variant="h2" component="h6" mb={2.5} textAlign="center">
            Связаться с нами
          </Typography>
          <Stack
            direction="column"
            alignItems="center"
            mb={6}
            px={{ xs: 1, md: 2 }}
          >
            <ContactTextFields
              phoneRef={phoneRef}
              nameRef={nameRef}
              onPhoneChange={phoneChangeHandler}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ lineHeight: 2.5, borderRadius: "4px" }}
              disabled={!isValid}
            >
              Оставить заявку
            </Button>
          </Stack>
          <PrivacyAgree sx={{ px: { xs: 1, sm: 2 } }} />
        </Box>
      </Dialog>
    </>
  );
};

export default ContactForm;

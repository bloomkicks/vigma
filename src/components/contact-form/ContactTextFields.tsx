import type { Ref } from "react";
import phoneInputHandler from "../../features/order-form/phone-input-handler";
import TextField from "@mui/material/TextField";

const ContactTextFields = ({
  phoneRef,
  nameRef,
  onPhoneChange,
}: {
  phoneRef: Ref<HTMLInputElement>;
  nameRef: Ref<HTMLInputElement>;
  onPhoneChange: (e: any) => void;
}) => {
  return (
    <>
      <TextField
        variant="outlined"
        label="Номер телефона"
        color="info"
        type="tel"
        sx={{ mb: 1.5, width: "100%", maxWidth: 500 }}
        inputProps={{
          onInput: phoneInputHandler,
          onChange: onPhoneChange,
          required: true,
        }}
        inputRef={phoneRef}
        placeholder="+7 (___) ___-__-__"
      />
      <TextField
        variant="outlined"
        label="Ваше имя"
        color="info"
        type="text"
        inputRef={nameRef}
        sx={{ mb: 3.5, width: "100%", maxWidth: 500 }}
      />
    </>
  );
};

export default ContactTextFields;

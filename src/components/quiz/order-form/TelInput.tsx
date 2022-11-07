import phoneInputHandler from "../../../features/order-form/phone-input-handler";
import TextField from "@mui/material/TextField";
import React from "react";

const TelInput = React.forwardRef(
  (
    {
      onChange,
    }: { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void },
    ref,
  ) => {
    return (
      <TextField
        variant="outlined"
        label="Ваш Телефон"
        color="info"
        type="tel"
        inputProps={{
          onInput: phoneInputHandler,
          onChange: onChange,
          required: true,
        }}
        inputRef={ref}
        helperText="Введите номер вашего телефона"
        placeholder="+7 (___) ___-__-__"
        sx={{ mx: "auto", mb: 8 }}
      />
    );
  },
);
TelInput.displayName = "TelInput";

export default TelInput;

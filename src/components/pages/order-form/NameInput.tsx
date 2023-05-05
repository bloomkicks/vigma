import React from "react";
import TextField from "@mui/material/TextField";

const NameInput = React.forwardRef((props, ref) => {
  return (
    <TextField
      variant="outlined"
      label="Ваше Имя"
      color="info"
      type="text"
      inputProps={{
        required: true,
      }}
      inputRef={ref}
      placeholder="Алина..."
    />
  );
});
NameInput.displayName = "NameInput";

export default NameInput;

import { useDispatch } from "react-redux";

import FormControlLabel from "@mui/material/FormControlLabel";
import MuiRadio from "@mui/material/Radio";

const RadioOption = ({ label, value }: { label: string; value: string }) => {
  return (
    <FormControlLabel
      value={value}
      label={label}
      control={
        <MuiRadio size="small" color="info" sx={{ lineHeight: "1em" }} />
      }
    />
  );
};

export default RadioOption;

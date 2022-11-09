import FormControlLabel from "@mui/material/FormControlLabel";
import MuiRadio from "@mui/material/Radio";

const RadioOption = ({
  label,
  value,
  isChecked,
}: {
  label: string;
  value: string;
  isChecked: boolean;
}) => {
  return (
    <FormControlLabel
      value={value}
      label={label}
      checked={isChecked}
      control={<MuiRadio size="small" color="info" sx={{ lineHeight: 1 }} />}
    />
  );
};

export default RadioOption;

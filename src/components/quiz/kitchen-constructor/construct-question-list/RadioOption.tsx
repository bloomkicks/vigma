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
      sx={{ "& .MuiFormControlLabel-label": { fontSize: 16 }, mb: 0.2 }}
      control={
        <MuiRadio
          size="small"
          color="info"
          sx={{
            lineHeight: 1,
            mr: -0.2,
            height: "30px",
          }}
        />
      }
    />
  );
};

export default RadioOption;

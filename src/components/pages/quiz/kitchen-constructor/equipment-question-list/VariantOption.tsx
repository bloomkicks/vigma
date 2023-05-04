import FormControlLabel from "@mui/material/FormControlLabel";
import MuiRadio from "@mui/material/Radio";

const VariantOption = ({
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
      sx={{
        "& .MuiFormControlLabel-label": {
          fontSize: { xs: "1.3rem", md: "1.2rem" },
        },
        mb: 0.2,
      }}
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

export default VariantOption;

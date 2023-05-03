import FormInfoDialog from "../FormInfoDialog";
import sendContacts from "../../../features/order-form/send-contacts";
import { useRef, useState } from "react";
import useForm from "../../../hooks/use-form";
import phoneInputHandler from "../../../features/order-form/phone-input-handler";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const inputs = [
  {
    label: "Номер телефона",
    placeholder: "+7 (999) 999-99-99",
    type: "tel",
    required: true,
  },
  {
    label: "Ваше имя",
    placeholder: "Иван...",
    type: "text",
  },
];

function telValidate(length) {
  return length === 11;
}

const PhoneForm = ({ onClose }: { onClose?: () => void }) => {
  const telRef = useRef<HTMLInputElement>();
  const nameRef = useRef<HTMLInputElement>();
  const [isValid, setIsValid] = useState<boolean>(false);

  inputs[0]["inputProps"] = {
    onInput: phoneInputHandler,
    onChange: phoneChangeHandler,
    required: true,
  };
  inputs[0]["inputRef"] = telRef;
  inputs[1]["inputRef"] = nameRef;

  async function onSubmit() {
    await sendContacts({
      phone: telRef.current.value,
      name: nameRef.current.value,
    });
    try {
      (window as any).ym(process.env.METRICA_KEY, "reachGoal", "contacts_sent");
    } catch (err) {
      console.log(
        "[Данные для аналитики]: Ошибка с отправкой Яндекс цели - contacts_sent",
      );
    }
  }

  function phoneChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const number = e.target.value.replaceAll(/[^\d]/g, "");
    setIsValid(telValidate(number.length));
  }
  const { submitHandler, isSuccess, isLoading, error, clearState, notValid } =
    useForm({
      onSubmit,
      isValid,
    });

  return (
    <>
      <Stack
        component="form"
        method="POST"
        onSubmit={submitHandler}
        sx={{ mb: 4 }}
      >
        {inputs.map((inputProps, i) => {
          const inputId = "call-popup-" + inputProps.label;
          const activeColor =
            i === 0 && notValid ? "error.main" : "secondary.dark";
          const bgColor = "rgb(243, 243, 243)";
          const hoverBgColor = "rgb(227, 227, 227)";

          return (
            <TextField
              variant="filled"
              color="secondary"
              size="small"
              error={i === 0 && !!notValid}
              {...inputProps}
              key={inputId}
              sx={{
                mb: { xs: 1.75 + i * 1.25, sm: 2.25 + i * 1.2 },
                "& .MuiInputLabel-root": {
                  color: "rgba(0, 0, 0, 0.6)",
                  fontSize: { xs: "1.25rem", sm: "1.15rem", lg: "1.3rem" },
                  transform: "translate(15px, 12.5px)",
                },
                "& .MuiInputLabel-shrink, & .MuiInputLabel-root.Mui-focused ": {
                  color: activeColor,
                  transform: "translate(15px, 6px) scale(0.75)",
                },
                "& .MuiInputBase-root.Mui-focused::after": {
                  borderColor: activeColor,
                  borderBottomWidth: "3px",
                },
                "& .MuiInputLabel-root.Mui-error": {
                  animation: i === 0 ? "shaking 500ms ease-out" : "",
                },
                "& .MuiInputBase-root.Mui-focused, & .MuiInputBase-root.Mui-error":
                  {
                    borderRadius: "0px",
                    borderTopLeftRadius: "9px",
                    borderTopRightRadius: "9px",
                  },
                "& .MuiInputBase-root": {
                  boxShadow: "inset 1px 3px 4px rgba(0,0,0,0.35)",
                  borderRadius: "9px",
                  transition:
                    "border-radius 250ms ease-out, background-color 100ms ease-out",
                },
                "& .MuiInputBase-root, & .MuiInputBase-root.Mui-focused, & .MuiInputBase-root:hover, & .MuiInputBase-root:focus":
                  { bgcolor: bgColor },
                "& .MuiInputBase-root:hover, & .MuiInputBase-root:focus": {
                  bgcolor: hoverBgColor,
                },
                "& .MuiInputBase-input": {
                  transition: "padding 100ms ease-out",
                  pl: "15px",
                  fontSize: { xs: "1.25rem", sm: "1.15rem", lg: "1.3rem" },
                },
                "& .MuiInputBase-input::placeholder": {
                  opacity: 0.55,
                },
                '& .MuiInputBase-root.Mui-focused .MuiInputBase-input, & [data-shrink="true"] + .MuiInputBase-root .MuiInputBase-input':
                  {
                    pb: 1,
                    pt: 3,
                  },
              }}
            />
          );
        })}
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          sx={{
            mx: "auto",
            "&:hover, &:focus": { bgcolor: "#82BBCA" },
            "&.Mui-disabled": {
              bgcolor: "rgba(151, 208, 221, 0.8)",
              color: "rgba(0, 0, 0, 0.5)",
            },
            py: 1.5,
            px: 5,
            fontSize: { xs: "1.15rem", sm: "1.1rem", lg: "1.15rem" },
          }}
        >
          Отправить
        </Button>
      </Stack>
      <FormInfoDialog
        isSuccess={isSuccess}
        isLoading={isLoading}
        error={error}
        open={isSuccess || !!error}
        onClose={() => {
          clearState();
          (onClose || function () {})();
          setIsValid(false);
        }}
      />
    </>
  );
};

export default PhoneForm;

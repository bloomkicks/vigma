import FormInfoDialog from "../../general/FormInfoDialog";
import PrivacyAgree from "../privacy/PrivacyAgree";
import useForm from "../../../hooks/use-form";
import Divider from "@mui/material/Divider";

import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FormActions from "./FormActions";
import NameInput from "./NameInput";
import TelInput from "./TelInput";

import { useEffect, useRef, useState } from "react";
import sendOrder from "../../../features/order-form/send-order";
import type { QuizAnswer } from "../../../types/quiz";

const OrderForm = ({
  onClose,
  answers,
  product,
}: {
  onClose: () => void;
  answers: QuizAnswer[];
  product?: string;
}) => {
  useEffect(() => {
    const orderForm = document.querySelector("#order-form");
    orderForm.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);
  const telRef = useRef<HTMLInputElement>();
  const nameRef = useRef<HTMLInputElement>();
  const [isValid, setIsValid] = useState<boolean>(false);

  async function onSubmit() {
    await sendOrder(
      telRef.current.value,
      answers,
      nameRef.current.value,
      product,
    );
    try {
      (window as any).ym(process.env.METRICA_KEY, "reachGoal", "order_sent");
    } catch (err) {
      console.log(
        "[Данные для аналитики]: Ошибка с отправкой Яндекс цели - order_sent",
      );
    }
  }

  function telInputChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const number = e.target.value.replaceAll(/[^\d]/g, "");
    setIsValid(number.length === 11);
  }

  const { submitHandler, isSuccess, error, clearState } = useForm({
    onSubmit: onSubmit,
    isValid,
  });

  return (
    <>
      <Box
        pb={6}
        px={2.5}
        pt={4}
        id="order-form"
        className="vertical-large-fading"
        maxWidth={700}
        mx="auto"
      >
        <Divider sx={{ mb: { xs: 3.5, md: 4.5 } }} />
        <Typography
          variant="h4"
          mb={{ xs: 3.75, md: 4.5 }}
          align="center"
          sx={{
            fontSize: { xs: "2.1rem", md: "2.25rem" },
            maxWidth: { xs: 550, md: "none" },
            mx: "auto",
          }}
        >
          За каким номером зафиксировать подарок?
        </Typography>
        <FormControl
          component="form"
          method="POST"
          fullWidth
          onSubmit={submitHandler}
        >
          <Stack
            direction="column"
            alignItems="center"
            spacing={{ xs: 1.5, md: 2 }}
            sx={{
              px: 1,
              mb: { xs: 4.5, md: 6 },
              width: "100%",
              "&>*": { maxWidth: { xs: 420, sm: 500 }, width: "100%" },
            }}
          >
            <TelInput ref={telRef} onChange={telInputChangeHandler} />
            <NameInput ref={nameRef} />
          </Stack>
          <FormActions isAble={isValid} />
        </FormControl>
        <PrivacyAgree
          sx={{
            maxWidth: "80%",
            mt: { xs: 6, md: 5 },
            mx: "auto",
          }}
        />
        <Divider sx={{ mt: { xs: 3.5, md: 4.5 } }} />
      </Box>
      <FormInfoDialog
        open={isSuccess || !!error}
        error={error}
        isLoading={false}
        isSuccess={isSuccess}
        onClose={() => {
          onClose();
          clearState();
        }}
      />
    </>
  );
};

export default OrderForm;

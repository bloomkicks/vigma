import ContactInfoDialogs from "../../contact-form/ContactInfoDialogs";
import PrivacyAgree from "../../privacy/PrivacyAgree";
import useForm from "../../../hooks/use-form";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import { RootState } from "../../../store";

import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import OrderActions from "./OrderActions";
import NameInput from "./NameInput";
import TelInput from "./TelInput";

import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import sendOrder from "../../../features/order-form/send-order";
import type { QuizState } from "../../../types/quiz";

const OrderForm = ({
  quiz,
  onClose,
}: {
  quiz: QuizState;
  onClose: () => void;
}) => {
  useEffect(() => {
    const orderForm = document.querySelector("#order-form");
    orderForm.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);
  const size = useSelector((state: RootState) => state.size);
  const telRef = useRef<HTMLInputElement>();
  const nameRef = useRef<HTMLInputElement>();
  const [isValid, setIsValid] = useState<boolean>(false);

  async function onSubmit() {
    await sendOrder(telRef.current.value, quiz, size, nameRef.current.value);
    try {
      (window as any).ym(90359214, "reachGoal", "order_sent");
    } catch (err) {
      console.log("[Данные для аналитики]: Яндекс цель не отправилась");
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
        px={2}
        pt={6}
        id="order-form"
        className="vertical-large-fading"
      >
        <Divider sx={{ mb: 3.5 }} />
        <Typography variant="h4" mb={{ xs: 3.75, md: 4.5 }} align="center">
          За каким номером зафиксировать подарок?
        </Typography>
        <FormControl component="form" fullWidth onSubmit={submitHandler}>
          <Stack
            direction="column"
            alignItems="center"
            spacing={{ xs: 1.5, md: 2 }}
            sx={{
              mb: { xs: 4.5, md: 6 },
              width: "100%",
              "&>*": { maxWidth: 500, width: "100%" },
            }}
          >
            <TelInput ref={telRef} onChange={telInputChangeHandler} />
            <NameInput ref={nameRef} />
          </Stack>
          <OrderActions isAble={isValid} />
        </FormControl>
        <PrivacyAgree
          sx={{
            maxWidth: "80%",
            mt: { xs: 6, md: 7 },
            mx: "auto",
          }}
        />
        <Divider sx={{ mt: 3 }} />
      </Box>
      <ContactInfoDialogs
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

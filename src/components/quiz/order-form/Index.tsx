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
  onSuccess,
  onError,
}: {
  quiz: QuizState;
  onSuccess: () => void;
  onError: (err: string) => void;
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
  const [isAble, setIsAble] = useState<boolean>(false);
  async function totalSubmitHandler(e: React.FormEvent) {
    e.preventDefault();
    if (!isAble) return;
    try {
      await sendOrder(telRef.current.value, quiz, size, nameRef.current.value);
      onSuccess();
    } catch (err) {
      onError(err);
    }
  }
  function telInputChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const number = e.target.value.replaceAll(/[^\d]/g, "");
    setIsAble(number.length === 11);
  }

  return (
    <Box
      mb={6}
      px={2}
      pt={10}
      id="order-form"
      className="vertical-large-fading"
    >
      <Typography variant="h4" mb={5.5} align="center">
        За каким номером зафиксировать подарок?
      </Typography>
      <FormControl component="form" fullWidth onSubmit={totalSubmitHandler}>
        <Stack
          direction="column"
          alignItems="center"
          spacing={2}
          sx={{ mb: 8, width: "100%", "&>*": { maxWidth: 500, width: "100%" } }}
        >
          <TelInput ref={telRef} onChange={telInputChangeHandler} />
          <NameInput ref={nameRef} />
        </Stack>
        <OrderActions isAble={isAble} />
      </FormControl>
    </Box>
  );
};

export default OrderForm;

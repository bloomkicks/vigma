import { RootState } from "../../../store";

import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ConnectRadioGroup from "./ConnectRadioGroup";
import OrderActions from "./OrderActions";
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
  const [isAble, setIsAble] = useState<boolean>(false);
  async function totalSubmitHandler(e: React.FormEvent) {
    e.preventDefault();
    if (!isAble) return;
    try {
      await sendOrder(telRef.current.value, quiz, size);
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
    <Box mb={5} px={2} pt={9} id="order-form" className="vertical-large-fading">
      <Typography variant="h4" mb={4} align="center">
        Как Вы хотите, чтобы мы с вами связались?
      </Typography>
      <FormControl component="form" fullWidth onSubmit={totalSubmitHandler}>
        <ConnectRadioGroup />
        <TelInput ref={telRef} onChange={telInputChangeHandler} />
        <OrderActions isAble={isAble} />
      </FormControl>
    </Box>
  );
};

export default OrderForm;

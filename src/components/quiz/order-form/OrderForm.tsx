import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { QuizState } from "../../../store/quiz";
import sendOrder from "../../../features/order-form/send-order";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ConnectRadioGroup from "./ConnectRadioGroup";
import Actions from "./Actions";
import { useEffect } from "react";
import TelInput from "./TelInput";

import { useRef, useState } from "react";

const OrderForm = ({
  quizState,
  onSuccess,
  onError,
}: {
  quizState: QuizState;
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
      await sendOrder(telRef.current.value, quizState, size);
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
    <Box mb={5} px={2} mt={3} id="order-form" className="vertical-large-fading">
      <Typography variant="h1" mb={4} align="center">
        Как Вам удобнее получить результат?
      </Typography>
      <Stack spacing={4} alignItems="flex-start">
        <FormControl component="form" fullWidth onSubmit={totalSubmitHandler}>
          <ConnectRadioGroup />
          <Stack spacing={3} mt={4} sx={{ alignSelf: "center" }}>
            <TelInput ref={telRef} onChange={telInputChangeHandler} />
            <Actions isAble={isAble} />
          </Stack>
        </FormControl>
      </Stack>
    </Box>
  );
};

export default OrderForm;

import { useDispatch } from "react-redux";
import { quizActions } from "../../../store/quiz";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const ConnectRadioGroup = () => {
  const dispatch = useDispatch();
  function changeHandler(e, connectWay) {
    dispatch(quizActions.setConnectWay(connectWay));
  }

  return (
    <RadioGroup defaultValue="call" onChange={changeHandler}>
      <FormControlLabel
        value="call"
        name="как получить результат"
        label="Позвоните мне по телефону"
        control={<Radio />}
      />
      <FormControlLabel
        value="whatsapp"
        name="как получить результат"
        label="Напишите мне по WhatsApp"
        control={<Radio />}
      />
      <FormControlLabel
        value="sms"
        name="как получить результат"
        label="Напишите мне по СМС"
        control={<Radio />}
      />
    </RadioGroup>
  );
};

export default ConnectRadioGroup;

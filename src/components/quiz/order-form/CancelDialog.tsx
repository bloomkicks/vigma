import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { quizActions } from "../../../store/quiz";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CancelDialog = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  function cancelHandler() {
    dispatch(quizActions.clear());
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ fontFamily: "Roboto, sans-serif" }}>
        Вы уверены, что хотите отменить рассчет?
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Это очистит выбранные вами ответы
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="info">
          Нет
        </Button>
        <Button onClick={cancelHandler} color="warning">
          Отменить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CancelDialog;

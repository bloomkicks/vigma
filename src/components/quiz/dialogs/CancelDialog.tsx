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
      <DialogTitle sx={{ pb: 1, mt: 1, pr: 3.5 }}>
        <Typography component="p" variant="subtitle1">
          Вы уверены, что хотите отменить расчёт стоимости?
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Это очистит выбранные вами ответы
        </Typography>
      </DialogContent>
      <DialogActions sx={{ mr: 2 }}>
        <Button onClick={onClose} sx={{ color: "text.secondary", px: 1.75 }}>
          Нет
        </Button>
        <Button onClick={cancelHandler} color="error" sx={{ px: 1.75 }}>
          Отменить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CancelDialog;

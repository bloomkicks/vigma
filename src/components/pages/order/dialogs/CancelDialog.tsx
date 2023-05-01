import { useDispatch } from "react-redux";
import { quizActions } from "../../../../store/quiz";
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
  const dispatch = useDispatch();
  function cancelHandler() {
    dispatch(quizActions.clear());
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{ "& .MuiPaper-root": { mx: 2, px: { sm: 2 } } }}
    >
      <DialogTitle sx={{ pb: 1, mt: 1, pr: { md: 3.5 } }}>
        <Typography component="p" variant="subtitle1">
          Вы уверены, что хотите отменить расчёт стоимости?
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Это очистит выбранные вами ответы
        </Typography>
      </DialogContent>
      <DialogActions sx={{ mr: 2, mb: 0.5 }}>
        <Button
          onClick={onClose}
          sx={{ color: "text.secondary", px: 1.75, py: 1.25 }}
        >
          Нет
        </Button>
        <Button
          onClick={cancelHandler}
          color="error"
          sx={{ px: 1.75, py: 1.25 }}
        >
          Отменить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CancelDialog;

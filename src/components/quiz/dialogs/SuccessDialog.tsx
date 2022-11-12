import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const SuccessDialog = ({
  isSuccess,
  closeHandler,
}: {
  isSuccess: boolean;
  closeHandler: () => void;
}) => {
  return (
    <Dialog open={isSuccess}>
      <DialogTitle sx={{ pb: 1, mt: 1, pr: 5 }}>
        <Typography variant="subtitle1">
          Вы успешно отправили заявку на расчёт стоимости
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ mb: 1 }}>
        <Typography variant="body1">
          В течении суток с вами свяжется наш консультант
        </Typography>
      </DialogContent>
      <DialogActions sx={{ mr: 2 }}>
        <Button
          onClick={closeHandler}
          sx={{ color: "text.secondary", px: 1.75, textTransform: "none" }}
        >
          Вернуться на главную страницу
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SuccessDialog;

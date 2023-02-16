import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ErrorDialgo = ({
  error,
  closeHandler,
}: {
  error: string;
  closeHandler: () => void;
}) => {
  return (
    <Dialog open={!!error}>
      <DialogTitle color="error" sx={{ pb: 1, mt: 1, pr: 5 }}>
        <Typography component="p" variant="subtitle1">
          Что-то пошло не так, попробуйте позже
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ mb: 1 }}>
        <Typography variant="body1" color="error">
          Ошибка: {error}
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

export default ErrorDialgo;

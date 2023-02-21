import { useState } from "react";
import type { ContactFormState } from "../../types/contact-form";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ContactInfoDialogs = ({
  isSuccess,
  isLoading,
  notValid,
  error,
  open,
  onClose,
}: ContactFormState & { open: boolean; onClose: () => void }) => {
  return (
    <Dialog
      open={open}
      onClose={() => {
        setTimeout(() => onClose(), 2000);
      }}
    >
      <DialogTitle sx={{ pb: 1, mt: 1, pr: 5 }}>
        <Typography component="p" variant="subtitle1">
          {isSuccess || !error
            ? "Вы успешно отправили заявку"
            : "Что-то пошло не так, попробуйте позже"}
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ mb: 1 }}>
        <Typography variant="body1">
          {isSuccess || !error
            ? "В течении суток с вами свяжется наш консультант"
            : "Ошибка: " + error}
        </Typography>
      </DialogContent>
      <DialogActions sx={{ mr: 2 }}>
        <Button
          sx={{ color: "text.secondary", px: 1.75, textTransform: "none" }}
          onClick={onClose}
        >
          Вернуться на главную страницу
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactInfoDialogs;

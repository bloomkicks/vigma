import CancelDialog from "./CancelDialog";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import Button from "@mui/material/Button";

const FormActions = ({ isAble }: { isAble: boolean }) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  return (
    <>
      <CancelDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
      <Stack sx={{ mx: "auto", maxWidth: { xs: 275, md: 300 }, width: "90%" }}>
        <Button
          variant="contained"
          type="submit"
          disabled={!isAble}
          sx={{
            px: 2,
            py: 1.5,
            borderRadius: "8px",
            fontSize: { xs: 16, md: 18 },
          }}
        >
          ОТПРАВИТЬ ЗАЯВКУ
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "primary.dark",
            mt: 2,
            px: 2,
            fontSize: { xs: 16, md: 18 },
            py: 1.5,
            borderRadius: "8px",
            "&:hover, &:focus": {
              bgcolor: (theme) =>
                theme.palette.primary.light
                  .replace("rgb", "rgba")
                  .replace(")", ", 0.2)"),
            },
          }}
          onClick={() => setIsDialogOpen(true)}
        >
          ОТМЕНИТЬ
        </Button>
      </Stack>
    </>
  );
};

export default FormActions;

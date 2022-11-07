import CancelDialog from "./CancelDialog";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import Button from "@mui/material/Button";

const Actions = ({ isAble }: { isAble: boolean }) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  return (
    <>
      <CancelDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
      <Stack sx={{ mx: "auto" }}>
        <Button
          variant="contained"
          type="submit"
          disabled={!isAble}
          sx={{
            px: 3.5,
            py: "7px",
            borderRadius: "6px",
          }}
        >
          ОТПРАВИТЬ ЗАЯВКУ
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "primary.dark",
            textDecoration: "underline",
            mt: 2,
            px: 3.5,
            py: "7px",
            borderRadius: "6px",
            "&:hover": {
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

export default Actions;

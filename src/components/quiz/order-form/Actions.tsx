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
      <Stack>
        <Button variant="contained" type="submit" disabled={!isAble}>
          ПОЛУЧИТЬ РЕЗУЛЬТАТ
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "primary.dark",
            textDecoration: "underline",
            mt: 2,
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

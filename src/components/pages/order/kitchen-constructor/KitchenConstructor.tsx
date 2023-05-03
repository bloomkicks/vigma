import type { EquipmentAnswer } from "../../../../types/quiz";

import Stack from "@mui/material/Stack";

import KitchenDisplay from "./KitchenDisplay";
import ListEquipmentQuestion from "./equipment-question-list/ListEquipmentQuestion";

const KitchenConstructor = ({
  equipmentAnswers,
}: {
  equipmentAnswers: EquipmentAnswer[];
}) => {
  return (
    <Stack alignItems="center" sx={{ maxWidth: "1366px" }}>
      <KitchenDisplay equipmentAnswers={equipmentAnswers} />
      <ListEquipmentQuestion
        equipmentAnswers={equipmentAnswers}
      />
    </Stack>
  );
};

export default KitchenConstructor;

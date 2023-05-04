import type { EquipmentAnswer } from "../../../../types/quiz";

import Stack from "@mui/material/Stack";

import KitchenDisplay from "./KitchenDisplay";
import EquipmentQuestionList from "./equipment-question-list/EquipmentQuestionList";

const KitchenConstructor = ({
  equipmentAnswers,
}: {
  equipmentAnswers: EquipmentAnswer[];
}) => {
  return (
    <Stack alignItems="center" sx={{ maxWidth: "1366px" }}>
      <KitchenDisplay equipmentAnswers={equipmentAnswers} />
      <EquipmentQuestionList
        equipmentAnswers={equipmentAnswers}
      />
    </Stack>
  );
};

export default KitchenConstructor;

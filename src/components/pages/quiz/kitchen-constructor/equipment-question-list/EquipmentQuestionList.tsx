import type { EquipmentAnswer } from "../../../../../types/quiz";
import { equipmentQuestions } from "../../../../../data/quiz/quiz-questions";
import EquipmentQuestion from "./EquipmentQuestion";
import Grid from "@mui/material/Grid";

const EquipmentQuestionList = ({
  equipmentAnswers,
}: {
  equipmentAnswers: EquipmentAnswer[];
}) => {
  return (
    <Grid
      container
      columnSpacing={{ xs: 3, md: 5 }}
      rowSpacing={{ xs: 2.5, md: 5 }}
      sx={{
        mx: "auto",
        ml: { xs: 0.5, sm: 0 },
        width: { xs: "fit-content" },
      }}
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      {equipmentQuestions
        .filter(
          (q, i) =>
            i === 0 ||
            (equipmentAnswers[i - 1].selectedVariant && i !== 3) ||
            (i === 3 && equipmentAnswers[1].selectedVariant === "В пенале") ||
            (i === 4 && equipmentAnswers[2].selectedVariant),
        )
        .map((equipmentQuestion, i) => {
          let id = i;
          if (i === 3 && equipmentAnswers[1].selectedVariant !== "В пенале") {
            id = i + 1;
          }
          const variants = equipmentQuestion.variants;

          return (
            <EquipmentQuestion
              equipment={equipmentQuestion.equipment}
              selected={equipmentAnswers[id].selectedVariant}
              variants={variants}
              key={equipmentQuestion.equipment}
            />
          );
        })}
    </Grid>
  );
};

export default EquipmentQuestionList;

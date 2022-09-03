import Image from "next/image";
import { quizAssetsPath } from "../../../data/general/assets-paths";
import getKitchenDisplay from "../../../features/quiz/get-kitchen-display";
import type { RootState } from "../../../store";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";

const KitchenDisplay = () => {
  const kitchenDisplay = useSelector((state: RootState) =>
    getKitchenDisplay(state.quiz.constructorQuestions),
  );

  return (
    <Box
      sx={{
        height: "auto",
        mb: 1.5,
      }}
    >
      <img
        src={`${quizAssetsPath}/kitchen/constructor/${kitchenDisplay}.webp`}
        alt="Получившаяся кухня"
        width="500px"
        height="337px"
      />
    </Box>
  );
};

export default KitchenDisplay;

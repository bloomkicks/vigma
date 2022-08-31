import Image from "next/image";
import { quizAssetsPath } from "../../../data/general/assets-paths";
import getKitchenDisplay from "../../../features/quiz/get-kitchen-display";
import type { RootState } from "../../../store";
import { useSelector } from "react-redux";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const KitchenDisplay = () => {
  const constructorOptions = useSelector(
    (state: RootState) => state.quiz.selectedConstructorOptions,
  );

  const kitchenDisplay = getKitchenDisplay(constructorOptions);

  return (
    <Box
      sx={{
        height: "auto",
        mb: 1.5,
      }}
    >
      <img
        src={`${quizAssetsPath}/kitchen/constructor/${kitchenDisplay}.webp`}
        width="500px"
        height="337px"
      />
    </Box>
  );
};

export default KitchenDisplay;

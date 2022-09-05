import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Image from "next/image";

import { quizAssetsPath } from "../../../data/general/assets-paths";
import getKitchenDisplay from "../../../features/quiz/get-kitchen-display";
import type { RootState } from "../../../store";
import { useSelector } from "react-redux";

const KitchenDisplay = () => {
  const kitchenDisplay = useSelector((state: RootState) =>
    getKitchenDisplay(state.quiz.constructorQuestions),
  );

  return (
    <Box
      sx={{
        mb: 3,
        boxShadow: `0px 0px 2px -1px rgba(0,0,0,0.3),
              0px 1px 2px 1px rgba(0,0,0,0.2),
              0px 1px 5px 1px rgba(0,0,0,0.27)`,
        maxWidth: "95%",
        minWidth: "300px",
        height: "min-content",
        "& > span": {
          display: "block !important",
        },
      }}
    >
      <Image
        src={`${quizAssetsPath}/kitchen/constructor/${kitchenDisplay}.webp`}
        alt="Получившаяся кухня"
        loading="eager"
        width={741.3}
        height={500}
      />
    </Box>
  );
};

export default KitchenDisplay;

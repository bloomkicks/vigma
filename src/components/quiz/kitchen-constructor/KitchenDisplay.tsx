import type { ConstructorQuestions } from "../../../types/quiz";
import Box from "@mui/material/Box";
import Image from "next/image";

import getKitchenDisplay from "../../../features/quiz/get-kitchen-display";
import type { RootState } from "../../../store";
import { useSelector } from "react-redux";

const KitchenDisplay = ({ questions }: { questions: ConstructorQuestions }) => {
  const kitchenDisplay = getKitchenDisplay(questions);

  return (
    <Box
      sx={{
        mb: 4,
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
        src={`${process.env.QUIZ_ASSETS}/kitchen/constructor/${kitchenDisplay}.webp`}
        alt="Получившаяся кухня"
        loading="eager"
        width={741.3}
        height={500}
      />
    </Box>
  );
};

export default KitchenDisplay;

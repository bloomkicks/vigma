import { equipmentTranslations } from "../../../../../data/quiz/quiz-translations";
import React from "react";
import { useDispatch } from "react-redux";
import quizActions from "../../../../../store/quiz-slice";

import Grid from "@mui/material/Grid";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import VariantOption from "./VariantOption";

const ConstructQuestion = ({
  equipment,
  variants,
  selected,
}: {
  equipment: string;
  selected?: string;
  variants: string[];
}) => {
  const dispatch = useDispatch();
  function selectOptionHandler(e, value: string) {
    dispatch(
      quizActions.equipmentSelect({
        name: equipment,
        variant: value,
      }),
    );
  }

  return (
    <Grid item component="section" className="fading">
      <Stack>
        <Typography
          mb={1}
          variant="subtitle2"
          fontSize="1.4rem"
          sx={{
            mr: ["dishwasher", "microwave"].includes(equipment)
              ? "5px"
              : { xs: "-3px", md: "-5px" },
          }}
        >
          {equipmentTranslations[equipment]}
        </Typography>
        <RadioGroup onChange={selectOptionHandler}>
          {variants.map((variant) => {
            return (
              <VariantOption
                isChecked={selected === variant}
                value={variant}
                label={variant}
                key={equipment + variant}
              />
            );
          })}
        </RadioGroup>
      </Stack>
    </Grid>
  );
};

export default React.memo(ConstructQuestion);

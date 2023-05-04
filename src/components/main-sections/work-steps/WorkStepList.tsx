import WorkStep from "./WorkStep";
import Stack from "@mui/material/Stack";

let workSteps = [
  {
    imgName: "phone",
    description: "Отправление заявки и получение консультации",
  },
  {
    imgName: "plan",
    description: "Составление дизайн-проекта и проведение замеров",
  },
  {
    imgName: "saw",
    description:
      "Изготовление кухни на нашем производстве (в среднем - от 14 дней)",
  },
  {
    imgName: "delivery",
    description: "Доставка, установка и подключение техники",
  },
  {
    imgName: "stars",
    description: "Счастливый покупатель с новой кухней",
  },
];

const WorkStepList = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      flexWrap="wrap"
      alignItems={{ xs: "center", md: "flex-start" }}
      justifyContent="center"
      spacing={{ xs: 0, sm: 1, md: 2, lg: 3.5 }}
      mt={{ xs: -1, sm: -0.5 }}
      maxWidth={{ xs: 420, sm: 620, md: 900 }}
      mx="auto"
      pl={{ xs: 0.5, md: 2 }}
      pr={{ xs: 0.5, md: 0 }}
      sx={{
        "& > div, & > div:not(style)": {
          mb: { xs: 2, md: 2.5 },
        },
      }}
    >
      {workSteps.map((step, index) => (
        <WorkStep
          imgSrc={`/images/work-steps/${step.imgName}.png`}
          description={step.description}
          index={index + 1}
          key={"work-step" + (index + 1)}
        />
      ))}
    </Stack>
  );
};

export default WorkStepList;

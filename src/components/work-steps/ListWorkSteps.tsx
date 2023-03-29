import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

let workSteps = [
  "Предоставляем консультацию и отправляем предварительный расчёт",
  "Производим замеры и составляем дизайн-проект",
  "Заключаем договор, вносится аванс 70% по договору",
  "Изготавливаем мебель на нашем производстве",
  "Доставляем и устанавливаем, вносится остаток 30% по договору",
];

const ListWorkSteps = () => {
  return (
    <Stack
      alignItems="flex-start"
      justifyContent="flex-start"
      spacing={1}
      mt={{ xs: -1.75, md: -3.25 }}
      maxWidth={{ xs: 420, md: 900 }}
      mx="auto"
      pl={{ md: 2 }}
    >
      {workSteps.map((step, index) => (
        <Box
          key={"work-step" + index}
          pl={index === 0 ? "2.5px" : 0}
          textAlign={{ xs: "center", md: "left" }}
        >
          <Typography
            variant="h2"
            component="strong"
            fontSize={index < 2 ? "2.4rem" : "2.25rem"}
            display="inline-block"
            sx={{
              transform: `translateY(${
                index === 2 ? "-1.5" : index === 1 ? "3" : ""
              }px)`,
            }}
          >
            {index + 1}
          </Typography>
          <Box
            sx={{
              height: 35,
              minWidth: 2,
              verticalAlign: "bottom",
              bgcolor: "black",
              ml: 0.8,
              mr: 1.4,
            }}
            display="inline-block"
          ></Box>
          <Typography
            variant="subtitle2"
            display={{ xs: "inline-block", md: "inline" }}
            sx={{ verticalAlign: "middle", lineHeight: 1.3 }}
          >
            {step}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default ListWorkSteps;

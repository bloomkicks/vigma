import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

let workSteps = [
  "Предоставляем консультацию и отправляем предварительный расчёт",
  "Производим замеры и составляем дизайн-проект",
  "Заключаем договор, вносится аванс 70% от договора",
  "Изготавливаем мебель на производстве",
  "Доставляем и устанавливаем, вносится остаток 30% по договору",
];

const ListWorkSteps = () => {
  return (
    <Stack
      alignItems="flex-start"
      justifyContent="flex-start"
      spacing={1.1}
      mt={{ xs: -2, md: -2.5 }}
      maxWidth={{ xs: 420, md: 800 }}
      mx="auto"
      pl={{ md: 2 }}
    >
      {workSteps.map((step, index) => (
        <Box
          key={"work-step" + index}
          pl={index === 0 ? "2.5px" : 0}
          textAlign={{ xs: "center", md: "left" }}
        >
          <Typography variant="h2" component="strong" display="inline-block">
            {index + 1}
          </Typography>
          <Box
            sx={{
              height: 35,
              width: 2,
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
            sx={{ verticalAlign: "middle" }}
          >
            {step}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default ListWorkSteps;

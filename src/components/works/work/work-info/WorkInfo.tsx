import { useRouter } from "next/router";
import { quizActions } from "../../../../store/quiz";
import { useDispatch } from "react-redux";
import type { WorkInfoProps } from "../../../../types/works";
import ListColor from "./color-list/ListColor";
import ListProperty from "./property-list/ListProperty";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const WorkInfo = ({
  title,
  description,
  colors,
  properties,
  sx,
}: WorkInfoProps & { sx?: any }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  function orderHandler() {
    dispatch(quizActions.selectItem(title));
    router.push("/order");
  }

  return (
    <Box position="relative" sx={sx}>
      <Typography variant="h4" sx={{ textTransform: "uppercase", mb: 0.8 }}>
        {title}
      </Typography>
      <Typography component="p" variant="subtitle2" mb={1.4}>
        {description || ""}
      </Typography>
      <ListColor colors={colors} />
      <ListProperty properties={properties} sx={{ mb: { xs: 6, md: 7.5 } }} />
      <Button
        variant="contained"
        sx={{
          lineHeight: { xs: 2.9, md: "61px" },
          borderRadius: "10px",
          display: "flex",
          mx: { xs: "auto", md: 1 },
        }}
        onClick={orderHandler}
      >
        ЗАКАЗАТЬ
      </Button>
    </Box>
  );
};

export default WorkInfo;

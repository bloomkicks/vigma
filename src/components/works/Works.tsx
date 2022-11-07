import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Work from "./work/Work";
import works from "../../storage/works";

const Works = () => {
  return (
    <>
      <Typography variant="h1" mb={1} mt={5}>
        Каталог Мебели
      </Typography>
      <Stack
        component="main"
        direction="column"
        spacing={6}
        sx={{ pt: 10, alignItems: "center" }}
      >
        {works.map((work) => (
          <>
            <Work {...work} key={work.info.title} />
            <Divider />
          </>
        ))}
      </Stack>
    </>
  );
};

export default Works;

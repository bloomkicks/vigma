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
        sx={{
          pt: { xs: 4, md: 10 },
          px: 4,
          alignItems: "center",
          width: "100%",
        }}
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

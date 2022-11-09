import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Work from "./work/Work";
import works from "../../storage/works";

const Works = () => {
  return (
    <>
      <Typography
        variant="h1"
        mt={5}
        mb={{ xs: 4, md: 8 }}
        sx={{ textAlign: "center" }}
      >
        Каталог Мебели
      </Typography>
      <Stack
        component="main"
        direction="column"
        spacing={7}
        sx={{
          px: { xs: 3, md: 4, lg: 9 },
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

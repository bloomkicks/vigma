import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Work from "./work/Work";
import works from "../../storage/works";
import Box from "@mui/material/Box";

const Works = () => {
  return (
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
  );
};

export default Works;

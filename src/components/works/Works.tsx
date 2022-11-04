import Stack from "@mui/material/Stack";
import Work from "./work/Work";
import works from "../../storage/works";
import Box from "@mui/material/Box";

const Works = () => {
  return (
    <Stack direction="column" spacing={5}>
      {works.map((work) => (
        <Work {...work} key={work.info.title} />
      ))}
    </Stack>
  );
};

export default Works;

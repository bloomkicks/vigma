import ItemStar from "./ItemStar";
import Stack from "@mui/material/Stack";

const ListStar = ({ rating = 5 }) => {
  let starArray = Array(5)
    .fill(null)
    .map((i) => i);

  return (
    <Stack direction="row" spacing="5px" mb="26px">
      {starArray.map((star, index) => (
        <ItemStar isGrey={index >= rating} key={"star" + index} />
      ))}
    </Stack>
  );
};

export default ListStar;

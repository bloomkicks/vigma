const builder = "/main-assets/builder.jpeg"
import AsideImage from "../layout/AsideImage";
import classes from "./MainImage.module.css";

const MainImage = (props) => {
  return (
    <AsideImage
      src={builder}
      alt=""
      className={classes.MainImage}
    />
  );
};

export default MainImage;

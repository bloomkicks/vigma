import Image from "../layout/Image";
import classes from "./MainImage.module.css";
import imgSrc from "../../assets/main/builder.jpg";

const MainImage = (props) => {
  return (
    <Image
      src={imgSrc}
      alt="Спасатель вашего интерьера"
      className={classes.MainImage}
    />
  );
};

export default MainImage;

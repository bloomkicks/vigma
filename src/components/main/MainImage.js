import classes from "./MainImage.module.css";
import imgSrc from "../../assets/main/builder.jpg";

const MainImage = (props) => {
  return <img src={imgSrc} className={classes.MainImage} alt="Спасатель вашего интерьера" />;
};

export default MainImage;

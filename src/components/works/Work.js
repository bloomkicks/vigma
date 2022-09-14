import Paper from "@mui/material/Paper";
import Link from "next/link";
import { useRouter } from "next/router";
import { quizActions } from "../../store/quiz";
import MainButton from "../ui/MainButton";
import Bold from "../ui/Bold";
import Secondary from "../ui/Secondary";
import ImageContainer from "./ImageContainer";
import classes from "./Work.module.scss";
import { useDispatch } from "react-redux";

function formatPrice(price) {
  let formattedPrice = "";
  for (let i = price.length; i > 0; i--) {
    let toAdd = "";
    if (i % 3 === 0) {
      toAdd = ".";
    }
    toAdd += price[i - 1];
    formattedPrice = toAdd + formattedPrice;
  }
  formattedPrice = "от " + formattedPrice;
  return formattedPrice;
}

const Work = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { photos, title, description, price, colors } = props;

  let formattedPrice = "";
  if (price) {
    formattedPrice = formatPrice(price);
  }

  const orderHandler = (e) => {
    e.preventDefault();
    dispatch(quizActions.selectItem(title));
    router.push("/order");
  };

  return (
    <Paper
      component="section"
      sx={{ backgroundColor: "#d3f5d6" }}
      className={classes.work}
    >
      <ImageContainer photos={photos} title={title} />
      <figcaption className={classes.left}>
        <Secondary>{title}</Secondary>
        {description.map((desc) => (
          <p key={Math.random()}>{desc}</p>
        ))}
      </figcaption>
      <figcaption className={classes.right}>
        <div className={classes.colors}>
          {colors.map((color) => (
            <div key={Math.random()} style={{ background: color }}></div>
          ))}
        </div>
        {price && (
          <div className={classes.price}>
            <Bold>{formattedPrice}</Bold>
            <small>руб. за п.м.</small>
          </div>
        )}
      </figcaption>
      <Link href="/order" passHref>
        <MainButton component="a" onClick={orderHandler}>
          <p>Рассчитать для Вас</p>
        </MainButton>
      </Link>
    </Paper>
  );
};

export default Work;

import MainButton from "../ui/MainButton";
import Bold from "../ui/Bold";
import Secondary from "../ui/Secondary";
import NewImages from "./NewImages";
import classes from "./NewWork.module.scss";

const NewWork = (props) => {
  const { photos, title, description, price, colors } = props;

  let formattedPrice = "";
  if (price) {
    formattedPrice = "от ";
    for (let i = 1; i <= price.length; i++) {
      let toAdd = "";
      if (i % 3 === 0) {
        toAdd += ".";
      }
      toAdd += price[i - 1];
      formattedPrice += toAdd;
    }

    formattedPrice += "₽";
  }

  return (
    <section className={classes.work}>
      <NewImages photos={photos} title={title} />
      <figcaption className={classes.left}>
        <Secondary>{title}</Secondary>
        {description.map((desc) => (
          <p key={Math.random()}>{desc}</p>
        ))}
      </figcaption>
      <figcaption className={classes.right}>
        <div className={classes.colors}>
          {colors.map((color) => (
            <div style={{ background: color }}></div>
          ))}
        </div>
        <Bold>{formattedPrice}</Bold>
      </figcaption>
      <MainButton>
        <p>ЗАКАЗАТЬ</p>
      </MainButton>
    </section>
  );
};

export default NewWork;

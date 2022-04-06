const starSrc = "/reviews-assets/star.svg";
import classes from "./Rating.module.css";

const Rating = (props) => {
  const rating = new Array(props.rating).fill(true);
  const nonActive = new Array(5 - props.rating).fill(false);

  return (
    <div className={classes.Rating}>
      {rating.map((star) => {
        return (
          <img
            className={classes.Star}
            src={starSrc}
            key={Math.random()}
            alt="Звезда"
          />
        );
      })}
      {nonActive.map((star) => {
        return (
          <img
            className={`${classes.Star} ${classes.NonActive}`}
            key={Math.random()}
            src={starSrc}
            alt="Звезда"
          />
        );
      })}
    </div>
  );
};

export default Rating;

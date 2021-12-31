import MainButton from "../ui/MainButton";
import Secondary from "../ui/Secondary";
import Section from "../ui/Section";
import classes from "./Work.module.css";

const Work = (props) => {
  const { photos, colors, description, name } = props;

  return (
    <Section element="figure" className={classes.Work}>
      <div className={classes.ImageContainer}>
        {photos.map((photo) => {
          return (
            <div
              key={Math.random()}
              className={photo.isVertical && classes.Vertical}
            >
              <img src={photo.src} />
            </div>
          );
        })}
      </div>
      <div className={classes.Desc}>
        <figcaption className={classes.DescSec}>
          <Secondary>{name}</Secondary>
          <p>{description}</p>
        </figcaption>
        <div className={classes.DescSec}>
          <div className={classes.Colors}>
            {colors.map((color) => {
              return <div style={{ backgroundColor: color }} key={Math.random()}></div>;
            })}
          </div>
          <MainButton>Заказать</MainButton>
        </div>
      </div>
    </Section>
  );
};

export default Work;

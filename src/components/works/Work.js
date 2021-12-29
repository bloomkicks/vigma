import Secondary from "../ui/Secondary";
import Section from "../ui/Section";
import classes from "./Work.module.css";

const Work = (props) => {
  const { photos, name } = props;

  console.log(photos[0]);

  return (
    <Section element="figure" className={classes.Work}>
      <div className={classes.ImageContainer}>
        {photos.map((photo) => {
          return (
            <div>
              <img src={photo} key={Math.random()} />
            </div>
          );
        })}
      </div>
      <figcaption>
        <Secondary>{name}</Secondary>
      </figcaption>
    </Section>
  );
};

export default Work;

import { useRouter } from "next/router";

import ImageContainer from "./ImageContainer";
import MainButton from "../ui/MainButton";
import Secondary from "../ui/Secondary";
import Section from "../ui/Section";
import classes from "./Work.module.css";

const Work = (props) => {
  const {
    photos,
    colors,
    query,
    description,
    name,
    style,
    deskStyle,
    imgContainerStyle,
  } = props;
  const router = useRouter();

  const searchParams = new URLSearchParams(query);
  const orderHandler = (e) => {
    router.push(`/order?${searchParams}`);
  };

  return (
    <Section
      element="figure"
      isHorizontal={true}
      className={classes.Work}
      style={style || {}}
    >
      <ImageContainer style={imgContainerStyle} photos={photos} />
      <div className={classes.Desc} style={deskStyle || {}}>
        <figcaption className={classes.DescSec}>
          <Secondary>{name}</Secondary>
          {description.map((descrip) => {
            return <p key={Math.random()}>{descrip}</p>;
          })}
        </figcaption>
        <div className={classes.DescSec}>
          <div className={classes.Colors}>
            {colors.map((color) => {
              return (
                <div style={{ background: color }} key={Math.random()}></div>
              );
            })}
          </div>
          <MainButton onClick={orderHandler} className={classes.OrderButton}>
            <p>Заказать</p>
          </MainButton>
        </div>
      </div>
    </Section>
  );
};

export default Work;

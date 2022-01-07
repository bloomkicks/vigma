import { useMemo, useRef, useState } from "react";
import classes from "./ImageContainer.module.css";

const ImageContainer = (props) => {
  const { photos, ...containerProps } = props;
  const imageIds = useRef(photos.map(() => Math.random()));
  const [zoomedId, setZoomedId] = useState();

  const zoomHandler = (e) => {
    const id = parseFloat(e.target.dataset.id);
    if (zoomedId == id) setZoomedId(null);
    else setZoomedId(id);
  };

  const zoomBlurHandler = (e) => {
    const id = parseFloat(e.target.dataset.id);
    if (zoomedId == id) {
      setZoomedId(null);
    }
  };

  return (
    <div className={classes.ImageContainer}>
      {photos.map((photo, index) => {
        const id = imageIds.current[index];
        return (
          <div
            key={id}
            data-id={id}
            tabIndex={index}
            onFocus={zoomHandler}
            onBlur={zoomBlurHandler}
            className={`
              ${photo.isVertical ? classes.Vertical : classes.Horiz}
              ${id === zoomedId && classes.ZoomedImage}
            `}
          >
            <img src={photo.src} />
          </div>
        );
      })}
    </div>
  );
};

export default ImageContainer;

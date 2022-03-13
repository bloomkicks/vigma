import { useRef, useState } from "react";

import ZoomedImage from "./ZoomedImage";
import classes from "./ImageContainer.module.css";

const ImageContainer = (props) => {
  const { photos, ...containerProps } = props;
  const [zoomedSrc, setZoomedSrc] = useState(null);

  const zoomClickHandler = (e) => {
    e.stopPropagation();
    const src = e.target.getAttribute("src");
    if (zoomedSrc == src) setZoomedSrc(null);
  };

  const zoomFocusHandler = (e) => {
    const src = e.target.getAttribute("src");
    if (zoomedSrc == src) setZoomedSrc(null);
    setZoomedSrc(src);
  };

  const zoomBlurHandler = (e) => {
    const src = e.target.getAttribute("src");
    console.log(src);
    if (zoomedSrc == src) {
      setZoomedSrc(null);
    }
  };

  return (
    <>
      <div className={classes.ImageContainer} style={props.style || {}}>
        {photos.map((photo, index) => {
          return (
            <div
              key={index + Math.random()}
              className={`
              ${photo.isVertical ? classes.Vertical : classes.Horiz}
            `}
            >
              <img
                tabIndex={1}
                onClick={zoomClickHandler}
                onFocus={zoomFocusHandler}
                onBlur={zoomBlurHandler}
                src={photo.src}
              />
            </div>
          );
        })}
      </div>
      {zoomedSrc && <ZoomedImage src={zoomedSrc} key={Math.random()} />}
    </>
  );
};

export default ImageContainer;

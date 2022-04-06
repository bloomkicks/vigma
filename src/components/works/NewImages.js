import ZoomedImage from "./ZoomedImage";
import classes from "./NewImages.module.scss";
import { useState } from "react";

const NewImages = (props) => {
  const [zoomed, setZoomed] = useState(null);
  const { photos, title } = props;

  const zoomHandler = (e) => {
    setZoomed(e.target.src);
  };
  const unzoomHandler = e => {
    setZoomed(null)
  }

  return (
    <>
      {zoomed && (
        <ZoomedImage
          onClose={unzoomHandler}
          src={zoomed}
        />
      )}
      <div className={classes.images}>
        {photos.map((photo) => {
          return (
            <div
              onClick={zoomHandler}
              key={Math.random()}
              className={
                photo.isVertical ? classes.ver : classes.hor
              }
            >
              <img
                src={photo.src}
                alt={title + " Фотография"}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NewImages;

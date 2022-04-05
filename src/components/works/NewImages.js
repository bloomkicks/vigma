import classes from "./NewImages.module.scss";

const NewImages = (props) => {
  const { photos, title } = props;

  return (
    <div className={classes.images}>
      {photos.map((photo) => {
        return (
          <div
            key={Math.random()}
            className={photo.isVertical ? classes.ver : classes.hor}
          >
            <img src={photo.src} alt={title + " Фотография"} />
          </div>
        );
      })}
    </div>
  );
};

export default NewImages;

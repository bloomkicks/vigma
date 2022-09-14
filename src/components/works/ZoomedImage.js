import Modal from "../ui/Modal";
import classes from "./ZoomedImage.module.css";

const ZoomedImage = (props) => {
  return (
    <Modal className={classes.ZoomedWrapper} onClose={props.onClose}>
      <img
        src={props.src}
        alt="Не получилось загрузить фотографию, попробуйте позже"
        className={classes.ZoomedImage}
      />
    </Modal>
  );
};

export default ZoomedImage;

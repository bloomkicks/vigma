import Modal from "../ui/Modal";
import classes from "./ZoomedImage.module.css";

const ZoomedImage = (props) => {
  return (
    <Modal className={classes.ZoomedWrapper}>
      <img src={props.src} alt="" className={classes.ZoomedImage} />
    </Modal>
  );
};

export default ZoomedImage;

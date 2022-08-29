import Secondary from "../ui/Secondary";
import Modal from "../ui/Modal";
import classes from "./OrderedModal.module.css";

const OrderedModal = (props) => {
  const { text, status, children, ...modalProps } = props;

  return (
    <Modal className={classes.Modal} {...modalProps}>
      <Secondary>{status}</Secondary>
      <p>{text}</p>
    </Modal>
  );
};

export default OrderedModal;

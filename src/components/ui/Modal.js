import { useState } from "react";
import classes from "./Modal.module.scss";

export const Backdrop = (props) => {
  const { children, ...backdropProps } = props;

  return (
    <div id="backdrop" className={classes.Backdrop} {...backdropProps}>
      {children}
    </div>
  );
};

const Modal = (props) => {
  const [isActive, setIsActive] = useState(true);
  const clickHandler = (e) => {
    props.onClose && props.onClose(e);
    setIsActive(false);
  };

  return (
    isActive && (
      <Backdrop onClick={clickHandler}>
        <div className={`${classes.Modal} ${props.className}`}>
          {props.children}
        </div>
      </Backdrop>
    )
  );
};

export default Modal;

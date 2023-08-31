import type { RootState } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "@/store/popup-slice";

import StatusPopup from "./StatusPopup";
import ModalCard from "./ModalCard";

const ModalRoot = () => {
  const dispatch = useDispatch();
  const modalState = useSelector((state: RootState) => state.modal);

  function toggleModalHandler(setTo?: any) {
    dispatch(modalActions.toggleAll(setTo));
  }
  function onFormSubmit(status: string) {
    dispatch(modalActions.toggleModal(status));
  }
  function waitToClose() {
    setTimeout(() => toggleModalHandler(false), 1000);
  }

  return (
    <>
      <div
        onClick={waitToClose}
        className={
          "backdrop fixed top-0 left-0 bg-black h-full w-full z-20 transition-opacity duration-[50ms] lg:duration-100 ease-out hidden opacity-0"
        }
        style={{
          opacity: modalState.open ? "0.5" : "0",
          display: modalState.open ? "block" : "none",
        }}
      ></div>
      <ModalCard
        modalState={modalState}
        onFormSubmit={onFormSubmit}
        toggleModalHandler={toggleModalHandler}
      />
      <StatusPopup
        open={modalState.open && ["success", "error"].includes(modalState.mode)}
        mode={modalState.mode}
        onClose={toggleModalHandler}
      />
    </>
  );
};

export default ModalRoot;

import StatusPopup from "./StatusPopup";
import WayChoice from "./WayChoice";
import { popupActions } from "@/store/popup-slice";
import type { RootState } from "@/store";
import { useSelector, useDispatch } from "react-redux";

import GiftBanner from "../ui/GiftBanner";
import Link from "next/link";
import PopupForm from "./PopupForm";
import popups from "@/data/popups";

const Popup = () => {
  const dispatch = useDispatch();
  const popupState = useSelector((state: RootState) => state.popup);

  function togglePopupHandler(setTo?: any) {
    dispatch(popupActions.toggleAll(setTo));
  }
  function onFormSubmit(status: string) {
    dispatch(popupActions.togglePopup(status));
  }

  function waitToClose() {
    setTimeout(() => togglePopupHandler(false), 1000);
  }

  return (
    <>
      <div
        onClick={waitToClose}
        className={
          "backdrop fixed top-0 left-0 bg-black h-full w-full z-20 transition-opacity duration-[50ms] lg:duration-100 ease-out hidden opacity-0"
        }
        style={{
          opacity: popupState.open ? "0.5" : "0",
          display: popupState.open ? "block" : "none",
        }}
      ></div>
      <section
        className={`popup h-full pt-[114px] px-[40px] pr-[48px] min-h-[99vh] w-full fixed left-0 top-0 z-40 bg-white transition-transform duration-[400ms] lg:duration-[450ms] ease-out pb-8 overflow-y-auto -translate-y-full md:max-w-[480px] md:px-10 md:pr-10 md:left-1/2 md:-translate-x-1/2 lg:pt-[42px] lg:min-h-[650px] lg:h-[80vh] lg:pb-10
            ${
              popupState.open &&
              !["success", "error"].includes(popupState.mode)
                ? "translate-y-0 lg:translate-y-[100px]"
                : "-translate-y-full"
            }
        `}
      >
        <>
          <button
            onClick={togglePopupHandler}
            className="absolute right-[26px] top-[92px] p-2 rounded-1 hover:bg-gray transition-colors duration-75 lg:duration-[125ms] ease-out lg:scale-[1.2] lg:top-[28px] lg:right-[32px]"
          >
            <img
              src="/images/popups/close-cross.svg"
              alt="Закрыть"
              className="w-auto h-[17px]"
            />
          </button>
          <h2 className="heading mb-2 lg:!text-heading">
            {popups[popupState.mode].title}
          </h2>
          <p className="leading-[1.5]">
            {popups[popupState.mode].description}
          </p>
          <WayChoice />
          <PopupForm
            inputs={popups[popupState.mode].inputs}
            button={popups[popupState.mode].button}
            onFormSubmit={onFormSubmit}
          />
          {(popupState.mode === "invite-designer" && (
            <p className="mt-3.5">
              Вызов, замер и проект -{" "}
              <span className="font-semibold">бесплатно</span>
            </p>
          )) ||
            (popupState.mode === "call-consultant" && (
              <p className="mt-3.5">
                Или позвоните нам сами:{" "}
                <Link
                  href="tel:+7(964)642-60-51"
                  passHref
                  legacyBehavior
                >
                  <a className="inline-block mt-0.5 numbers">
                    +7 (964) 642-60-51
                  </a>
                </Link>
              </p>
            ))}
          <p className="body2 mt-6 pr-2 lg:pr-4">
            Продолжая, вы соглашаетесь с{" "}
            <Link href="/privacy" passHref legacyBehavior>
              <a>нашей политикой конфиденциальности</a>
            </Link>
          </p>
          {/* <GiftBanner styles="mt-6" /> */}
        </>
      </section>
      <StatusPopup
        open={
          popupState.open &&
          ["success", "error"].includes(popupState.mode)
        }
        mode={popupState.mode}
        onClose={togglePopupHandler}
      />
    </>
  );
};

export default Popup;

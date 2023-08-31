import popups from "@/data/popups";

import Link from "next/link";

import ModalForm from "./ModalForm";
import ConnectMethodChoice from "./ConnectMethodChoice";

const ModalCard = ({
  modalState,
  onFormSubmit,
  toggleModalHandler,
}: {
  modalState: any;
  onFormSubmit: (status: string) => void;
  toggleModalHandler: () => void;
}) => {
  return (
    <section
      className={`modal h-full pt-[114px] px-[40px] pr-[48px] min-h-[99vh] w-full fixed left-0 top-0 z-40 bg-white transition-transform duration-[400ms] lg:duration-[450ms] ease-out pb-8 overflow-y-auto -translate-y-full md:max-w-[480px] md:px-10 md:pr-10 md:left-1/2 md:-translate-x-1/2 lg:pt-[42px] md:min-h-[665px] md:h-[70vh] lg:pb-10
            ${
              modalState.open && !["success", "error"].includes(modalState.mode)
                ? "translate-y-0 lg:translate-y-[100px]"
                : "-translate-y-full"
            }
        `}
    >
      <>
        <button
          onClick={() => toggleModalHandler()}
          className="absolute right-[26px] top-[92px] p-2 rounded-1 hover:bg-gray transition-colors duration-75 lg:duration-[125ms] ease-out lg:scale-[1.2] lg:top-[28px] lg:right-[32px]"
        >
          <img
            src="/images/popups/close-cross.svg"
            alt="Закрыть"
            className="w-auto h-[17px]"
          />
        </button>
        <h2 className="heading mb-2 lg:!text-heading">
          {popups[modalState.mode].title}
        </h2>
        <p className="leading-[1.5]">{popups[modalState.mode].description}</p>
        <ConnectMethodChoice />
        <ModalForm
          inputs={popups[modalState.mode].inputs}
          button={popups[modalState.mode].button}
          onFormSubmit={onFormSubmit}
        />
        {(modalState.mode === "invite-designer" && (
          <p className="mt-3.5">
            Вызов, замер и проект -{" "}
            <span className="font-semibold">бесплатно</span>
          </p>
        )) ||
          (modalState.mode === "call-consultant" && (
            <p className="mt-3.5">
              Или позвоните нам сами:{" "}
              <Link href="tel:+7(964)642-60-51" passHref legacyBehavior>
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
      </>
    </section>
  );
};

export default ModalCard;

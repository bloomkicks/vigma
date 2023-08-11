import { useDispatch } from "react-redux";
import { popupActions } from "@/store/popup-slice";

const DesignerBanner = () => {
  const dispatch = useDispatch();
  function clickHandler() {
    dispatch(popupActions.togglePopup("invite-designer"));
  }

  return (
    <button
      onClick={clickHandler}
      className="button mx-auto !py-8 !rounded-2 shadow-strong relative z-10 w-[calc(100%+6px)] ml-[-3px] md:ml-auto !text-left lg:w-[44%] max-w-[425px] xs:!pr-5"
    >
      <img
        src="/images/general/long-arrow-right.svg"
        alt="Вперед"
        className="w-[25px] h-auto absolute top-[23px] right-[30px] body2 -z-10"
      />
      <b className="block heading mb-1.5 lg:!text-heading">
        Это бесплатно!
      </b>
      <p className="subtitle1">
        Вызвать дизайнера с 250+ образцами материалов
      </p>
    </button>
  );
};

export default DesignerBanner;

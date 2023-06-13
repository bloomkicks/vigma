import { useDispatch } from "react-redux";
import { popupActions } from "@/store/popup-slice";
import StepList from "./StepList";

const GetKitchenSection = () => {
  const dispatch = useDispatch();
  function clickHandler() {
    dispatch(popupActions.togglePopup("invite-designer"));
  }

  return (
    <section className="section-dark" id="get-kitchen">
      <h2 className="heading mb-[26px] lg:mb-[46px]">
        Получить новую кухню - легко!
      </h2>
      <StepList />
      <button
        onClick={clickHandler}
        className="button block mx-auto mt-[33px] mb-4 button-primary transitioned shadow-dark lg:px-[68px] lg:mt-[50px] lg:mb-[22px]"
      >
        Вызвать дизайнера
      </button>
      <p className="text-center">
        Выезд, замер и проект –{" "}
        <span className="inline-block py-0.5 px-[5.5px] bg-primary bg-opacity-[0.45] -skew-x-6 font-semibold">
          бесплатно
        </span>
      </p>
    </section>
  );
};

export default GetKitchenSection;

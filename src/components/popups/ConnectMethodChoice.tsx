import type { RootState } from "@/store";
import { quizActions } from "@/store/quiz-slice";
import { useSelector, useDispatch } from "react-redux";

const ConnectMethodChoice = () => {
  const dispatch = useDispatch();
  const curConnectMethod = useSelector(
    (state: RootState) => state.quiz.connectMethod
  );
  function changeConnectMethodHandler(connectMethod: string) {
    return () => dispatch(quizActions.setConnectMethod(connectMethod));
  }

  return (
    <div className="mb-6 mt-4">
      <button
        onClick={changeConnectMethodHandler("По телефону")}
        className={`button !text-body2 !py-2 !px-2.5 mr-3 inline-block shadow-normal lg:!py-[9px] lg:!px-3.5 ${
          curConnectMethod === "По телефону"
            ? ""
            : "!bg-gray hover:!bg-gray-dark"
        }`}
      >
        <img
          src="/images/popups/phone.svg"
          alt=""
          className="inline mr-[5px] align-middle h-full w-auto lg:mr-1.5 lg:scale-105"
        />
        <span className="align-middle">По телефону</span>
      </button>
      <button
        onClick={changeConnectMethodHandler("WhatsApp")}
        className={`button !text-body2 !py-2 !px-2.5 inline-block shadow-normal lg:!py-[9px] lg:!px-3.5 ${
          curConnectMethod === "WhatsApp"
            ? ""
            : "!bg-gray hover:!bg-gray-dark"
        }`}
      >
        <img
          src="/images/popups/whatsapp.svg"
          alt=""
          className="inline mr-[5px] align-middle h-full w-auto lg:mr-1.5 lg:scale-105"
        />
        <span className="align-middle">WhatsApp</span>
      </button>
    </div>
  );
};

export default ConnectMethodChoice;

import { popupActions } from "@/store/popup-slice";
import SizeForm from "./SizeForm";
import { quizActions } from "@/store/quiz-slice";
import type { RootState } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import moveInArray from "@/features/move-in-array";
import { useState } from "react";
import QuizControls from "./QuizControls";
import OptionList from "./OptionList";
import QuizProgress from "./QuizProgress";

import quizData from "@/data/quiz";

const QuizSection = () => {
  const quiz = useSelector((state: RootState) => state.quiz);
  const dispatch = useDispatch();

  const [questionIndex, setQuestionIndex] = useState(0);

  function moveNextHandler() {
    if (questionIndex === quizData.length - 1) {
      dispatch(popupActions.togglePopup("calculate-price"));
    } else {
      setQuestionIndex((prev) =>
        moveInArray(prev, quizData.length, false, false, true)
      );
    }
  }
  function moveBackHandler() {
    setQuestionIndex((prev) =>
      moveInArray(prev, quizData.length, false, true, true)
    );
  }
  function selectHandler(option: string) {
    dispatch(
      quizActions.selectOption({
        question: quizData[questionIndex].question,
        option,
      })
    );
  }

  return (
    <section className="section-dark md:!px-[140px]" id="quiz">
      <h2 className="heading mb-8 lg:mb-[48px]">
        Рассчитайте стоимость вашей кухни и получите подарок при
        заказе
      </h2>
      <div className="lg:mx-auto lg:max-w-[800px]">
        <h5 className="subtitle1 mb-3 lg:mb-8">
          {quizData[questionIndex].translatedQuestion}
        </h5>
        <QuizProgress curIndex={questionIndex} />
        {quizData[questionIndex].question === "size" ? (
          <SizeForm
            sizes={{
              width: quiz.width as string,
              height: quiz.height as string,
              depth: quiz.depth as string,
            }}
          />
        ) : (
          <OptionList
            options={quizData[questionIndex].options!}
            onSelect={selectHandler}
            selectedOptions={
              quiz[quizData[questionIndex].question] as string[]
            }
            question={quizData[questionIndex].question}
          />
        )}
        <QuizControls
          onMoveNext={moveNextHandler}
          onMoveBack={moveBackHandler}
        />
      </div>
    </section>
  );
};

export default QuizSection;

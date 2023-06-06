import QuizControls from "./QuizControls";
import OptionList from "./OptionList";
import ProgressBar from "./ProgressBar";

const quizState: {
  curIndex: number;
  question: string;
  translatedQuestion: string;
  options: {
    imgName: string;
    title: string;
  }[];
} = {
  curIndex: 0,
  question: "shape",
  translatedQuestion: "Выберите форму вашей кухни",
  options: [
    {
      imgName: "shape/angled.jpg",
      title: "Угловая",
    },
    {
      imgName: "shape/linear.jpg",
      title: "Прямая",
    },
    {
      imgName: "shape/u-shaped.jpg",
      title: "П-образная",
    },
    {
      imgName: "shape/other.jpg",
      title: "Другое",
    },
  ],
};

const QuizSection = () => {
  return (
    <section className="section-dark pl-[35px] pr-[45px]" id="quiz">
      <h2 className="heading mb-8">
        Рассчитайте стоимость вашей кухни и получите подарок при
        заказе
      </h2>
      <h5 className="subtitle1 mb-3">
        {quizState.translatedQuestion}
      </h5>
      <ProgressBar curIndex={quizState.curIndex} />
      <OptionList options={quizState.options} />
      <QuizControls />
    </section>
  );
};

export default QuizSection;

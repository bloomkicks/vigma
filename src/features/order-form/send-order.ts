import { QuizAnswer } from "../../types/quiz";
import { send } from "@emailjs/browser";

async function sendOrder(
  tel: string,
  answers: QuizAnswer[],
  name: string,
  product?: string,
) {
  const quizData = {
    shape: answers[0].selectedOption,
    layout: answers[2].selectedOption,
    accessories: answers[3].selectedOption,
    front: answers[4].selectedOption,
    table: answers[5].selectedOption,
    gift: answers[7].selectedOption,
    // EQUIPMENT
    dishwasher: answers[1].equipmentAnswers[0].selectedVariant,
    oven: answers[1].equipmentAnswers[1].selectedVariant,
    hood: answers[1].equipmentAnswers[2].selectedVariant,
    microwave: answers[1].equipmentAnswers[3].selectedVariant,
    fridge: answers[1].equipmentAnswers[4].selectedVariant,
    // SIZE
    ...answers[6].sizeAnswers,
  };

  const emailParams = {
    name: name,
    number: tel,
    ...quizData,
    product: product || "Не выбрано",
  };

  send(
    process.env.SERVICE_ID,
    process.env.TEMPLATE_ID,
    emailParams,
    process.env.USER_ID,
  );
}

export default sendOrder;

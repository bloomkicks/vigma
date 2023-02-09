import { translateCategory } from "../quiz/translate";
import { QuizState } from "../../types/quiz";
import { send } from "@emailjs/browser";
import { Size } from "../../types/quiz";

async function sendOrder(
  tel: string,
  quiz: QuizState,
  size: Size,
  name: string,
) {
  const { answeredQuestions, constructorQuestions } = quiz;
  let typeQuestion = answeredQuestions[0];
  let frontQuestion = answeredQuestions[2];
  let bodyQuestion = answeredQuestions[-1];
  let tableQuestion = answeredQuestions[3];
  let giftQuestion = answeredQuestions[answeredQuestions.length - 1];

  const emailParams = {
    name: name,
    number: tel,

    product: quiz.product || "Не выбрано",
    width: size.width || "-",
    height: size.height || "-",
    depth: size.depth || "-",

    category: translateCategory("kitchen") || "-",
    type: (typeQuestion && typeQuestion["shape"]) || "-",
    front: (frontQuestion && frontQuestion.front) || "-",
    body: (bodyQuestion && bodyQuestion.body) || "-",
    table: (tableQuestion && tableQuestion.table) || "-",
    gift: (giftQuestion && giftQuestion.gift) || "-",

    ...constructorQuestions,
  };

  send(
    process.env.SERVICE_ID,
    process.env.TEMPLATE_ID,
    emailParams,
    process.env.USER_ID,
  );
}

export default sendOrder;

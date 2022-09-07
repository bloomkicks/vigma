import { translateCategory } from "../quiz/translate";
import { QuizState } from "../../store/quiz";
import { send } from "@emailjs/browser";
import { Size } from "../../types/quiz";

async function sendOrder(tel: string, quiz: QuizState, size: Size) {
  const { answeredQuestions, constructorQuestions } = quiz;
  const isKitchen = quiz.category === "kitchen";
  const isShape = isKitchen || quiz.category === "closet";
  let typeQuestion = answeredQuestions[isKitchen ? 0 : 0];
  let frontQuestion = answeredQuestions[isKitchen ? 2 : 1];
  let bodyQuestion = answeredQuestions[isKitchen ? -1 : 2];
  let tableQuestion = answeredQuestions[isKitchen ? 3 : -1];
  let giftQuestion = answeredQuestions[answeredQuestions.length - 1];

  const emailParams = {
    number: tel,
    connectWay: quiz.connectWay === "call" ? "по телефону" : quiz.connectWay,

    item: quiz.item || "Не выбрано",
    width: size.width || "-",
    height: size.height || "-",
    depth: size.depth || "-",

    category: translateCategory(quiz.category) || "-",
    type: (typeQuestion && typeQuestion[isShape ? "shape" : "category"]) || "-",
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

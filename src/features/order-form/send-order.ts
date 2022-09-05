import { translateCategory } from "../quiz/translate";
import { QuizState } from "../../store/quiz";
import { send } from "@emailjs/browser";
import { Size } from "../../types/quiz";

const SERVICE_ID = "service_kiq0jp9";
const TEMPLATE_ID = "template_hci5war";
const USER_ID = "user_2FU0yfDjTaoUzX8yIWhal";

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
    ...size,

    category: translateCategory(quiz.category) || "-",
    type: (typeQuestion && typeQuestion[isShape ? "shape" : "category"]) || "-",
    front: (frontQuestion && frontQuestion.front) || "-",
    body: (bodyQuestion && bodyQuestion.body) || "-",
    table: (tableQuestion && tableQuestion.table) || "-",
    gift: (giftQuestion && giftQuestion.gift) || "-",

    ...constructorQuestions,
  };

  send(SERVICE_ID, TEMPLATE_ID, emailParams, USER_ID);
}

export default sendOrder;

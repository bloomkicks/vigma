import { quizTranslations } from "../../data/quiz/quiz-translations";

export function translateQuestion(question: string) {
  const translate = quizTranslations[question];
  return typeof translate === "function" ? translate("kitchen") : translate;
}

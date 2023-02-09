import {
  categoriesTranslations,
  questionsTranslations,
} from "../../data/quiz/quiz-translations";

export function translateCategory(category: string) {
  return categoriesTranslations[category];
}

export function translateQuestion(question: string) {
  const translate = questionsTranslations[question];
  return typeof translate === "function" ? translate("kitchen") : translate;
}

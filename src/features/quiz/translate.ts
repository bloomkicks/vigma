import { Category } from "../../types/quiz";
import {
  categoriesTranslations,
  questionsTranslations,
} from "../../data/quiz/quiz-translations";

export function translateCategory(category: string) {
  return categoriesTranslations[category];
}

export function translateQuestion(question: string, category?: Category) {
  const translate = questionsTranslations[question];
  return typeof translate === "function" ? translate(category) : translate;
}

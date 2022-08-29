import { Category } from "../../models/quiz";
import { categoriesTranslations, questionsTranslations } from "../../data/quiz/translations";

export function translateCategory(category: string) {
  return categoriesTranslations[category]
}
export function translateQuestion(question: string, category: Category) {
  return questionsTranslations[question](category)
}
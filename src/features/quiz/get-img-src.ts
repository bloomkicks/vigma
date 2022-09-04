import { quizAssetsPath } from "../../data/general/assets-paths";
import { Category } from "../../types/quiz";

function getImgSrc(category: Category, question: string, title: string) {
  const fileName = title.toLowerCase().replaceAll(" ", "+");

  const imgSrc = category
    ? !["body", "front", "gift"].includes(question as string)
      ? `${quizAssetsPath}/${category}/${question}/${fileName}.jpg`
      : `${quizAssetsPath}/materials/${question}/${fileName}.jpg`
    : `${quizAssetsPath}/categories/${fileName}.jpg`;

  return imgSrc;
}

export default getImgSrc;

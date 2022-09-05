import { Category } from "../../types/quiz";

function getOptionImgSrc(category: Category, question: string, title: string) {
  const fileName = title.toLowerCase().replaceAll(" ", "+");

  const imgSrc = category
    ? !["body", "front", "gift"].includes(question as string)
      ? `${process.env.QUIZ_ASSETS}/${category}/${question}/${fileName}.jpg`
      : `${process.env.QUIZ_ASSETS}/materials/${question}/${fileName}.jpg`
    : `${process.env.QUIZ_ASSETS}/categories/${fileName}.jpg`;

  return imgSrc;
}

export default getOptionImgSrc;

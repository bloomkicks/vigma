import { Category } from "../../types/quiz";

function getOptionImgSrc(category: Category, question: string, title: string) {
  const fileName = title.toLowerCase().replaceAll(" ", "+");

  let imgSrc = `${process.env.QUIZ_ASSETS}/categories/${fileName}.jpg`;

  if (["body", "front", "gift"].includes(question as string)) {
    imgSrc = `${process.env.QUIZ_ASSETS}/materials/${question}/${fileName}.jpg`;
  } else if (category) {
    imgSrc = `${process.env.QUIZ_ASSETS}/${category}/${question}/${fileName}.jpg`;
  }

  return imgSrc;
}

export default getOptionImgSrc;

import { FlatQuestion } from "../../types/quiz";
import { frontOptions, bodyOptions } from "./materials";

import kitchen from "./categories/kitchen";
import closet from "./categories/closet";
import childish from "./categories/childish";
import bathroom from "./categories/bathroom";
import shop from "./categories/shop";
import office from "./categories/office";

const gift = ["Сковорода", "Смеситель", "Набор Ножей"];
// add front and body material questions
[closet, childish, bathroom, shop, office].forEach((category) =>
  category.push(...[{ front: frontOptions }, { body: bodyOptions }, { gift }]),
);

const allCategoryQuestions: {
  [category: string]: FlatQuestion[];
} = {
  kitchen,
  closet,
  childish,
  bathroom,
  shop,
  office,
};

export default allCategoryQuestions;

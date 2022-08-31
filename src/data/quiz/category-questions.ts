import { Category, Questions } from "../../types/quiz";
import { frontOptions, bodyOptions } from "./materials";

import kitchen from "./categories/kitchen";
import closet from "./categories/closet";
import childish from "./categories/childish";
import bathroom from "./categories/bathroom";
import shop from "./categories/shop";
import office from "./categories/office";

// add front and body material questions
[closet, childish, bathroom, shop, office].forEach((category) =>
  category.push(...[{ front: frontOptions }, { body: bodyOptions }]),
);

const allCategoryQuestions: {
  [category in Category]: Questions<string>;
} = {
  kitchen,
  closet,
  childish,
  bathroom,
  shop,
  office,
};

export default allCategoryQuestions;

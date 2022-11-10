export type FlatQuestion<T = string> = { [question: string]: T[] };
export type Category =
  | "kitchen"
  | "closet"
  | "childish"
  | "bathroom"
  | "shop"
  | "office"
  | "dishwasher"
  | "oven"
  | "hood"
  | "microwave"
  | "fridge"
  | "product";

export type ConstructorQuestions = { [question: string]: string | null };
export type Size = {
  width?: string;
  height?: string;
  depth?: string;
};

export type Translation = ((category: Category) => string) | string;

export type QuizState = {
  connectWay: string;
  product?: string;
  isFinished: boolean;

  // current question and its index
  currentQuestion: string;
  indexOfQuestion: number;

  // answers AVAILABLE & SELECTED
  availableOptions: string[];
  selectedOptions: string[];

  // storage of answered questions (array)
  answeredQuestions: FlatQuestion[];

  // all questions - if has category
  category?: Category;
  categoryQuestions?: FlatQuestion[];

  // translated
  translatedQuestion?: string;

  // constructor question
  constructorQuestions: ConstructorQuestions;
};

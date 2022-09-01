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
  | "fridge";

export type ConstructorQuestions = { [question: string]: string | null };

export type Translation = ((category: Category) => string) | string;

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
  | "item";

export type ConstructorQuestions = { [question: string]: string | null };
export type Size = {
  width?: string;
  height?: string;
  depth?: string;
};

export type Translation = ((category: Category) => string) | string;

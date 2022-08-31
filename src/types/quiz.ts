export type FlatQuestion<T = string> = { [question: string]: T[] };
export type Questions<T> = FlatQuestion<T | FlatQuestion<T>>[];
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
export type Translation = ((category: Category) => string) | string;

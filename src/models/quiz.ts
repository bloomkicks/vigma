export type FlatQuestion<T> = { [question: string]: (string | T)[] };
export type FlatQuestions<T> = Array<FlatQuestion<T>>;
export type Questions<T> = FlatQuestions<T | FlatQuestion<T>>;
export type Category =
  | "kitchen"
  | "closet"
  | "childish"
  | "bathroom"
  | "shop"
  | "office";

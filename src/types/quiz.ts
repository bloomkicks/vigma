export type QuizQuestion = {
  question: string;
  options?: string[];
};

export type QuizAnswer = {
  question: string;
  selectedOption?: string;
  equipmentAnswers?: EquipmentAnswer[];
  sizeAnswers?: SizeAnswers;
};

type QuizState = {
  curIndex: number;
  curQuestion: QuizQuestion;
  answers: QuizAnswer[];
  isFinished?: boolean;
  product?: string;
};

export type SizeAnswers = {
  width?: string;
  height?: string;
  depth?: string;
};

export type EquipmentQuestion = {
  equipment: string;
  variants: string[];
};

export type EquipmentAnswer = {
  equipment: string;
  selectedVariant: string;
};

export default QuizState;

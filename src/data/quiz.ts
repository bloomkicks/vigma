export type QuizState = {
  question: string;
  translatedQuestion: string;
  options?: {
    imgName: string;
    title: string;
  }[];
};

const quizData: QuizState[] = [
  {
    question: "shape",
    translatedQuestion: "Выберите форму вашей кухни",
    options: [
      {
        imgName: "angled.jpg",
        title: "Угловая",
      },
      {
        imgName: "linear.jpg",
        title: "Прямая",
      },
      {
        imgName: "u-shaped.jpg",
        title: "П-образная",
      },
      {
        imgName: "other.jpg",
        title: "Другое",
      },
    ],
  },
  {
    question: "front",
    translatedQuestion: "Выберите материалы фасадов кухни",
    options: [
      {
        imgName: "mdf-tape.jpg",
        title: "МДФ + Плёнка",
      },
      {
        imgName: "mdf-enamel.jpg",
        title: "МДФ + Эмаль",
      },
      {
        imgName: "mdf-hpl.jpg",
        title: "МДФ + HPL-пластик",
      },
      {
        imgName: "mdf-acrylic.jpg",
        title: "МДФ + Акрил",
      },
      {
        imgName: "array.jpg",
        title: "Массив",
      },
      {
        imgName: "other.jpg",
        title: "Другое",
      },
    ],
  },
  {
    question: "size",
    translatedQuestion: "Укажите примерные размеры кухни",
  },
  {
    question: "additional",
    translatedQuestion: "Выбирете дополнительные параметры",
    options: [
      {
        imgName: "top-laminate.jpg",
        title: "Столешница из компакт-ламината",
      },
      {
        imgName: "top-acrylic.jpg",
        title: "Столешница из акрила",
      },
      {
        imgName: "top-natural-stone.jpg",
        title: "Столешница из природного камня",
      },
      {
        imgName: "no-handles.jpg",
        title: "Шкафы без ручек",
      },
    ],
  },
  {
    question: "gift",
    translatedQuestion: "Выбирете подарок к вашей кухне",
    options: [
      {
        imgName: "микроволновка.jpg",
        title: "Микроволновка",
      },
      {
        imgName: "вытяжка.jpg",
        title: "Вытяжка",
      },
      {
        imgName: "плита.jpg",
        title: "Эл. плита",
      },
      {
        imgName: "фартук.jpg",
        title: "Фартук к кухне",
      },
    ],
  },
];

export default quizData;

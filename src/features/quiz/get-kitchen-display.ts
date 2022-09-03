import { Category, Translation } from "../../types/quiz";

const constructorQuestions = [
  "dishwasher",
  "oven",
  "hood",
  "microwave",
  "fridge",
];

const constructorOptions: {
  [question: string]: Translation;
} = {
  Да: "0",
  "В пенале": "1",
  Внизу: "2",
  Отдельная: (category) => {
    if (category === "oven") {
      return "3";
    }
    return "2";
  },
  Встроенная: "1",
  Нет: "0",
  Обычный: "1",
  Широкий: "2",
  Встроенный: "3",
  null: "0",
  undefined: "0",
};

function translateConstructorOption(
  option: string,
  category: Category,
): string {
  const translation = constructorOptions[option];
  return typeof translation === "function"
    ? translation(category)
    : translation;
}

function getKitchenDisplay(constructorOptions: {
  [category: string]: string;
}): string {
  const kitchenDisplay = Object.entries(constructorOptions)
    .sort(
      (a, b) =>
        constructorQuestions.indexOf(a[0]) - constructorQuestions.indexOf(b[0]),
    )
    .map((entry: [Category, string]) =>
      translateConstructorOption(entry[1], entry[0]),
    );

  while (kitchenDisplay.length < 5) {
    kitchenDisplay.push("0");
  }

  if (kitchenDisplay[1] === "3" && kitchenDisplay[4] === "3") {
    kitchenDisplay[4] = "1";
  }
  if (kitchenDisplay[1] !== "1") {
    kitchenDisplay[3] = "0";
  }

  return kitchenDisplay.join("-");
}

export default getKitchenDisplay;

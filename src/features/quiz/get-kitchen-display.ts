import type { EquipmentAnswer } from "../../types/quiz";
export const equipments = ["dishwasher", "oven", "hood", "microwave", "fridge"];

const equipmentVariantsTranslations: {
  [question: string]: string | ((any) => string);
} = {
  Да: "0",
  "В пенале": "1",
  Внизу: "2",
  Отдельная: (equipment) => {
    if (equipment === "oven") {
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
  variant: string,
  equipment: string,
): string {
  const translation = equipmentVariantsTranslations[variant];
  return typeof translation === "function"
    ? translation(equipment)
    : translation;
}

function getKitchenDisplay(equipmentAnswers: EquipmentAnswer[]): string {
  const kitchenDisplay = equipmentAnswers.map((answer: EquipmentAnswer) =>
    translateConstructorOption(answer.selectedVariant, answer.equipment),
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

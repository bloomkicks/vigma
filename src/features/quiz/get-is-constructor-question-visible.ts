const allQuestions = ["dishwasher", "oven", "hood", "microwave", "fridge"];

function getIsConstructorQuestionVisible(
  question: string,
  answeredQuestions: { [question: string]: string },
): boolean {
  const index = allQuestions.indexOf(question);

  // IS THIS IS A FIRST QUESTION
  if (index === 0) {
    return true;
  }

  // ARE NEEDED QUESTIONS ANSWERED
  const mustHaveQuestions = allQuestions.filter((v, i: number) => i < index);
  mustHaveQuestions.forEach((question) => {
    if (!answeredQuestions[question]) {
      return false;
    }
  });

  // IF MICROWAVE WITH OVEN NOT IN PENAL
  if (question === "microwave" && answeredQuestions["oven"] !== "В пенале") {
    return false;
  }

  return true;
}

export default getIsConstructorQuestionVisible;

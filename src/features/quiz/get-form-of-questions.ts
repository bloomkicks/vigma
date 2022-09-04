function getFormOfQuestions(amountOfQuestions: number): string {
  let questions = "вопросов";
  switch (amountOfQuestions) {
    case 1:
      questions = "вопрос";
      break;
    case 2:
    case 3:
    case 4:
      questions = "вопроса";
      break;
  }

  return questions;
}

export default getFormOfQuestions;

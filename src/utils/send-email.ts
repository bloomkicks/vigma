import { send } from "@emailjs/browser";

async function sendEmail(
  tel: string,
  name: string = "Не указано",
  answers: { [question: string]: string[] | string },
  address: string = "Не указано",
  product?: string
) {
  const { shape, front, additional, gift } = answers;

  const emailParams = {
    tel,
    name,
    address,
    product: product || "Не выбрано",
    shape: (shape as string[]).join(", "),
    front: (front as string[]).join(", "),
    additional: (additional as string[]).join(", "),
    gift: (gift as string[]).join(", "),
    connectMethod: answers.connectMethod,
    width: answers.width,
    height: answers.height,
    depth: answers.depth,
  };

  await send(
    process.env.SERVICE_ID!,
    process.env.TEMPLATE_ID!,
    emailParams,
    process.env.USER_ID!
  );
}

export default sendEmail;

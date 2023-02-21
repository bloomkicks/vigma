import { send } from "@emailjs/browser";

function sendContacts({ phone, name }: { phone: string; name?: string }) {
  send(
    process.env.SERVICE_ID,
    process.env.TEMPLATE_ID,
    { number: phone, name },
    process.env.USER_ID,
  );
}

export default sendContacts;

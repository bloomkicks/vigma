export type PopupProps = {
  title: string;
  description: string;
  inputs: {
    name: string;
    label: string;
    placeholder: string;
    type: string;
  }[];
  button: string;
  underText?: string;
};

const popups: {
  [mode: string]: PopupProps;
} = {
  "calculate-price": {
    title: "Рассчет стоимости вашей кухни",
    description:
      "Заполните анкету и мы сообщим вам стоимость вашей кухни в ближайшее время",
    inputs: [
      {
        name: "name",
        label: "Ваше имя",
        placeholder: "Мария...",
        type: "text",
      },
      {
        name: "tel",
        label: "Номер телефона",
        placeholder: "+7 (999) 999-99-99",
        type: "tel",
      },
    ],
    button: "Рассчитать стоимость",
    underText: "project-is-free",
  },
  "call-consultant": {
    title: "Запись на звонок и консультацию",
    description:
      "Заполните анкету и мы свяжемся с вами в ближайшее время",
    inputs: [
      {
        name: "name",
        label: "Ваше имя",
        placeholder: "Мария...",
        type: "text",
      },
      {
        name: "tel",
        label: "Номер телефона",
        placeholder: "+7 (999) 999-99-99",
        type: "tel",
      },
    ],
    button: "Записаться на звонок",
    underText: "our-number",
  },
  "invite-designer": {
    title: "Вызов дизайнера-замерщика",
    description:
      "Заполните анкету и мы свяжемся с вами в ближайшее время",
    inputs: [
      {
        name: "name",
        label: "Ваше имя",
        placeholder: "Мария...",
        type: "text",
      },
      {
        name: "tel",
        label: "Номер телефона",
        placeholder: "+7 (999) 999-99-99",
        type: "tel",
      },
      {
        name: "address",
        label: "Адрес",
        placeholder: "ул. Некрасова, д. 9, кв. 99...",
        type: "text",
      },
    ],
    button: "Вызвать дизайнера",
  },
  error: {
    title: "",
    description: "",
    inputs: [],
    button: "",
  },
  success: {
    title: "",
    description: "",
    inputs: [],
    button: "",
  },
};

export default popups;

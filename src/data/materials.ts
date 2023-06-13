export type Material = {
  title: string;
  description: string;
  imgName: string;
  properties: { title: string; text: string }[];
};

const materials: Material[] = [
  {
    title: "Фасады из МДФ и других материалов",
    description:
      "Фасады - это “лицо” вашей кухни. Они задают ее стиль и сильно влияют на восприятие всего интерьера. Самый популярный материал для фасадов - это МДФ, у него лучшее соотношение качества, практичности и цены",
    imgName: "front.jpg",
    properties: [
      {
        title: "500+ вариантов",
        text: "Большой выбор цветов и текстур",
      },
      {
        title: "От 10 лет",
        text: "Службы фасадов из МДФ в плёнке",
      },
      {
        title: "Главные поставщики",
        text: "EGGER, AGT, Кроношпан, Kronostar",
      },
    ],
  },
  {
    title: "Корпуса из ЛДСП",
    description:
      "Корпус — это основа будущего кухонного гарнитура. Мы делаем корпуса из плотных плит ЛДСП, которые выдерживают значительные нагрузки и соответствуют строгим экологическим стандартам",
    imgName: "body.jpg",
    properties: [
      {
        title: "100+ вариантов",
        text: "Большой выбор цветов и текстур",
      },
      {
        title: "От 15 лет",
        text: "Службы корпусов из ЛДСП",
      },
      {
        title: "Главные поставщики",
        text: "EGGER, Кроношпан, Невский Ламинат",
      },
    ],
  },
  {
    title:
      "Столешницы из акрила, компакт-ламината и природного камня",
    description:
      "Столешница — главная рабочая зона на кухне. Её поверхность должна выдерживать воздействие влаги, жиров и перепадов температуры, с чем успешно справляются наши столешницы из компакт-ламината и камня",
    imgName: "countertop.jpg",
    properties: [
      {
        title: "100+ вариантов",
        text: "Большой выбор цветов и текстур",
      },
      {
        title: "От 20 лет",
        text: "Службы столешниц из компакт-ламината и камня",
      },
      {
        title: "Главные поставщики",
        text: "Spanolux, Невский ламинат, Коростеньский завод",
      },
    ],
  },
  {
    title: "Качественная фурнитура",
    description:
      "Фурнитура — это ручки, петли, ножки, выдвижные механизмы и прочее оборудование, облегчающее хозяйке жизнь. Мы используем только надёжную фурнитуру от проверенных поставщиков",
    imgName: "accessories.jpg",
    properties: [
      {
        title: "150.000+",
        text: "Циклов открывания и закрывания",
      },
      {
        title: "От 10 лет",
        text: "Службы механизмов фурнитуры",
      },
      {
        title: "Главные поставщики",
        text: "Blum, Bouyard, Hettich, Hafele",
      },
    ],
  },
];

export default materials;

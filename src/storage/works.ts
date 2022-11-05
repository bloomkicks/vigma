import type { WorkProps, WorkInfoProps } from "../types/works";

// QUARTZ KITCHEN
const quartzKitchenFront = "quartz/front.jpeg";
const quartzKitchenSide = "quartz/side.jpeg";

// TIMBER CLOSET
const timberClosetClosed = "timber/closed.jpg";
const timberClosetOpen = "timber/open.jpg";

// BED AND DESK
const bed = "bed, desk, shelf/bed.jpeg";
const desk = "bed, desk, shelf/desk.jpeg";

// RED KITCHEN
const redKitchenLeft = "kitchen_2/left.jpeg";
const redKitchenRight = "kitchen_2/right.jpeg";

// LESS LIME KITCHEN
const lessLimeKitchenLeft = "less lime kitchen/left.jpeg";
const lessLimeKitchenRight = "less lime kitchen/right.jpeg";

// FUTURE KITCHEN
const futureKitchenTop = "kitchen details/top.jpg";
const futureKitchenBottom = "kitchen details/bottom.jpg";

// LATTE KITCHEN
const latteKitchenMain = "latte/main.jpeg";
const latteKitchenAngle = "latte/angle.jpeg";
const latteKitchenFar = "latte/far.jpeg";

// LINEAR_2 KITCHEN
const linear2KitchenMain = "linear_2/main.jpeg";
const linear2KitchenLilFar = "linear_2/lilfar.jpeg";
const linear2KitchenFar = "linear_2/far.jpeg";

// MODERN KITCHEN
const modernKitchenMain = "modern/main.jpeg";
const modernKitchenFront = "modern/front.jpeg";
const modernKitchenLong = "modern/long.jpeg";

// NORWAY KITCHEN
const norwayKitchenMain = "norway/main.jpeg";
const norwayKitchenLight = "norway/light.jpeg";
const norwayKitchenAngle = "norway/angle.jpeg";

// SAFARI KITCHEN
const safariKitchenAngle = "safari/angle.jpeg";
const safariKitchenMain = "safari/main.jpeg";
const safariKitchenFar = "safari/far.jpeg";

// SOLID KITCHEN
const solidKitchenAngleMain = "solid/angle_main.jpeg";
const solidKitchenAngle2 = "solid/angle2.jpeg";
const solidKitchenMain = "solid/main.jpeg";

const works: WorkProps[] = [
  {
    images: [
      {
        src: latteKitchenMain,
      },
      {
        src: latteKitchenAngle,
        isVertical: true,
      },
      {
        src: latteKitchenFar,
        isVertical: true,
      },
    ],
    info: {
      title: 'Кухня "Латте" Прямая',
      properties: [
        { property: "Габариты", value: "3000x500x2400" },
        { property: "Корпус", value: "ЛДСП Влагостойкий" },
        { property: "Фасад", value: "МДФ Пластик" },
        { property: "Фурнитура", value: "Hettich" },
        { property: "Столешница", value: "ДСП Пластик Троя" },
      ],
      price: "38651",
      colors: ["#cdcbcc", "#7d665e"],
    },
  },
  {
    // SOLID
    images: [
      {
        src: solidKitchenAngleMain,
      },
      {
        src: solidKitchenAngle2,
        isVertical: true,
      },
      {
        src: solidKitchenMain,
        isVertical: true,
      },
    ],
    info: {
      title: 'Кухня "Солид" Угловая',
      properties: [
        { property: "Габариты", value: "4200x2420x600" },
        { property: "Корпус", value: "ЛДСП Влагостойкий" },
        { property: "Фасад", value: "МДФ Эмаль" },
        { property: "Фурнитура", value: "Hettich" },
        { property: "Столешница", value: "Пластик" },
      ],
      price: "34376",
      colors: [
        "#746d71",
        "repeating-linear-gradient(90deg, #733617, #965632 3px)",
      ],
    },
  },
  {
    // FUTURISTIC
    images: [
      {
        src: futureKitchenTop,
      },
      {
        src: futureKitchenBottom,
      },
    ],
    info: {
      title: 'Кухня "Футуристик" Угловая',
      properties: [
        { property: "Габариты", value: "2750x500x2400" },
        { property: "Корпус", value: "ЛДСП Egger" },
        { property: "Фасад", value: "МДФ" },
        { property: "Фурнитура", value: "Hettich" },
        { property: "Столешница", value: "Искусcтвенный камень" },
      ],
      price: "29875",
      colors: ["#b8b19f", "#353444"],
    },
  },
  {
    // RED BRUSNIKA
    images: [
      {
        src: redKitchenLeft,
        isVertical: true,
      },
      {
        src: redKitchenRight,
        isVertical: true,
      },
    ],
    info: {
      title: 'Кухня "Брусника" Угловая',
      properties: [
        { property: "Габариты", value: "2750x500x2400" },
        { property: "Корпус", value: "ЛДСП" },
        { property: "Фасад", value: "МДФ Плёнка" },
        { property: "Фурнитура", value: "FGV (Италия)" },
        { property: "Столешница", value: "Пластик" },
      ],
      price: "30610",
      colors: [
        "#fcfaee",
        "linear-gradient(45deg, #bb2725 30%, #c26267 50%, #bb2725 65%)",
      ],
    },
  },
  {
    // MODERN
    images: [
      {
        src: modernKitchenMain,
      },
      {
        src: modernKitchenFront,
        isVertical: true,
      },
      {
        src: modernKitchenLong,
      },
    ],
    info: {
      title: 'Кухня "Модерн" c островком',
      properties: [
        { property: "Габариты", value: "2650х600х2500" },
        { property: "Корпус", value: "ЛДСП Lamarty" },
        { property: "Фасад", value: "Mattelux Super" },
        { property: "Фурнитура", value: "Hettich" },
        { property: "Столешница", value: "Пластик" },
      ],
      price: "33870",
      colors: ["#747675", "#c4baa4", "#644028"],
    },
  },
  {
    images: [
      {
        src: norwayKitchenMain,
      },
      {
        src: norwayKitchenAngle,
      },
      {
        src: norwayKitchenLight,
      },
    ],
    info: {
      title: 'Кухня "Норвегия" Угловая',
      properties: [
        { property: "Габариты", value: "2750х500х2400" },
        { property: "Корпус", value: "ЛДСП Влагостойкий" },
        { property: "Фасад", value: "МДФ Плёнка" },
        { property: "Фурнитура", value: "Hettich" },
        { property: "Столешница", value: "Пластик" },
      ],
      price: "22600",
      colors: [
        "#b8bab9",
        "#41454e",
        "repeating-linear-gradient(90deg, #a37452, #894f20 3px)",
      ],
    },
  },
  {
    // EXPLIT
    images: [
      {
        src: linear2KitchenMain,
      },
      {
        src: linear2KitchenLilFar,
        isVertical: true,
      },
      {
        src: linear2KitchenFar,
        isVertical: true,
      },
    ],
    info: {
      title: 'Кухня "Эксплит" Прямая',
      properties: [
        { property: "Габариты", value: "2850x500x23500" },
        { property: "Корпус", value: "ЛДСП Влагостойкий" },
        { property: "Фасад", value: "МДФ Плёнка" },
        { property: "Фурнитура", value: "Boyard (Китай)" },
      ],
      price: "19400",
      colors: ["#c6bbb7", "#141614"],
    },
  },
  {
    // SAFARI
    images: [
      {
        src: safariKitchenAngle,
      },
      {
        src: safariKitchenMain,
        isVertical: true,
      },
      {
        src: safariKitchenFar,
        isVertical: true,
      },
    ],
    info: {
      title: 'Кухня "Сафари" Угловая',
      properties: [
        { property: "Габариты", value: "2500х600х2400" },
        { property: "Корпус", value: "ЛДСП Влагостойкий" },
        { property: "Фасад", value: "МДФ Плёнка" },
        { property: "Фурнитура", value: "Hettich" },
        { property: "Столешница", value: "Массив" },
      ],
      price: "31870",
      colors: [
        "repeating-linear-gradient(90deg, #b18a3b, #a37931 3px )",
        "#c2d5db",
        "#0b151f",
      ],
    },
  },
  {
    // QUARTZ
    images: [
      {
        src: quartzKitchenFront,
        isVertical: true,
      },
      {
        src: quartzKitchenSide,
        isVertical: true,
      },
    ],
    info: {
      title: 'Кухня "Кварц" Угловая',
      properties: [
        { property: "Габариты", value: "2400х600х2450" },
        { property: "Корпус", value: "ЛДСП" },
        { property: "Фасад", value: "МДФ Плёнка" },
        { property: "Фурнитура", value: "Hettich" },
        { property: "Столешница", value: "Массив" },
      ],
      price: "41300",
      colors: ["#a3bec5", "#6b5851"],
    },
  },
  {
    // TIMBER
    images: [
      {
        src: timberClosetClosed,
      },
      {
        src: timberClosetOpen,
      },
    ],
    info: {
      title: 'Шкаф "Тимбер"',
      colors: ["#ada2a0", "#6b4b38", "#c0bcc3"],
      properties: [
        { property: "Габариты", value: "3100x600x2400" },
        { property: "Корпус", value: "ЛДСП Egger" },
        { property: "Фасад", value: "МДФ Дуб Молочный" },
        { property: "Фурнитура", value: "Boyard (Китай)" },
      ],
      price: "28400",
    },
  },
  {
    // UYT
    images: [
      {
        src: bed,
        isVertical: true,
      },
      {
        src: desk,
        isVertical: true,
      },
    ],
    info: {
      title: 'Детская "Уют"',
      properties: [
        { property: "Габариты", value: "3700х2100х2400" },
        { property: "Корпус", value: "ЛДСП с кромкой ПВХ 2мм" },
        { property: "Ручки", value: "Направляющие Шариковые" },
      ],
      price: "35400",
      colors: [
        "#c4c2b6",
        "repeating-linear-gradient(-45deg, #aca89c, #786859 3px)",
      ],
    },
  },
  {
    // LIME
    images: [
      {
        src: lessLimeKitchenLeft,
        isVertical: true,
      },
      {
        src: lessLimeKitchenRight,
        isVertical: true,
      },
    ],
    info: {
      title: 'Кухня "Лайм" Угловая',
      properties: [
        { property: "Габариты", value: "2780х600х2450" },
        { property: "Корпус", value: "ЛДСП" },
        { property: "Фасад", value: "МДФ Плёнка" },
        { property: "Фурнитура", value: "Hettich" },
        { property: "Столешница", value: "Искусственный Камень" },
      ],
      price: "23400",
      colors: [
        "linear-gradient(150deg, #e1fd5b 50%, #ffffff)",
        "#dfe1d4",
        "linear-gradient(45deg, #4f3d2b 20%, #86634d 50%, #4f3d2b)",
      ],
    },
  },
];

export default works;

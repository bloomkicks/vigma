import type { ProductProps } from "../types/products";

// BARHAT KITCHEN
const barhatKitchenFullsize = "barhat/fullsize.jpg";
const barhatKitchenAngled = "barhat/angled.jpg";
const barhatKitchenZoomed = "barhat/zoomed.jpg";

// MODERN KITCHEN
const modernKitchenFullsize = "modern/fullsize.jpg";
const modernKitchenAngled = "modern/angled.jpg";
const modernKitchenZoomed = "modern/zoomed.jpg";

// GOLD KITCHEN
const goldKitchenFurniture = "gold/furniture.jpg";
const goldKitchenFullsize = "gold/fullsize.jpg";
const goldKitchenAngled = "gold/angled.jpg";

// WINTER KITCHEN
const winterKitchenFullsize = "winter/fullsize.jpg";
const winterKitchenBottom = "winter/bottom.jpg";
const winterKitchenTop = "winter/top.jpg";

// STANDARD KITCHEN
const standardKitchenFullsize = "standard/fullsize.jpg";
const standardKitchenAngled = "standard/angled.jpg";

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

// MINI KITCHEN
const miniKitchenMain = "mini/main.jpeg";
const miniKitchenFront = "mini/front.jpeg";
const miniKitchenLong = "mini/long.jpeg";

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

const products: ProductProps[] = [
  {
    // BARHAT
    images: [
      {
        src: barhatKitchenFullsize,
      },
      {
        src: barhatKitchenAngled,
      },
      {
        src: barhatKitchenZoomed,
      },
    ],
    info: {
      title: 'Кухня "Бархарт" Прямая',
      colors: ["#0C0C0C", "#4A494F", "#514039"],
      properties: [
        { property: "Габариты", value: "2400x600x2100" },
        { property: "Корпус", value: "ЛДСП Влагостойкий" },
        { property: "Фасад", value: "МДФ" },
        { property: "Фурнитура", value: "Ettich" },
      ],
      price: "28400",
    },
  },
  {
    // MODERN
    images: [
      {
        src: modernKitchenFullsize,
      },
      {
        src: modernKitchenAngled,
      },
      {
        src: modernKitchenZoomed,
      },
    ],
    info: {
      title: 'Кухня "Модерн" с Островком',
      colors: ["#1D1D1D", "#9C876C"],
      properties: [
        { property: "Габариты", value: "2300x700x2100" },
        { property: "Корпус", value: "ЛДСП Влагостойкий" },
        { property: "Фасад", value: "МДФ" },
        { property: "Фурнитура", value: "Boyard (Китай)" },
      ],
      price: "28400",
    },
  },
  {
    // WINTER
    images: [
      {
        src: winterKitchenFullsize,
      },
      {
        src: winterKitchenBottom,
      },
      {
        src: winterKitchenTop,
      },
    ],
    info: {
      title: 'Кухня "Винтер" Прямая',
      colors: ["#E4E9E5", "#84847A", "#E8C399"],
      properties: [
        { property: "Габариты", value: "2400x600x2100" },
        { property: "Корпус", value: "ЛДСП Влагостойкий" },
        { property: "Фасад", value: "МДФ" },
        { property: "Фурнитура", value: "Boyard (Китай)" },
      ],
      price: "28400",
    },
  },
  {
    // GOLD
    images: [
      {
        src: goldKitchenFullsize,
      },
      {
        src: goldKitchenAngled,
      },
      {
        src: goldKitchenFurniture,
      },
    ],
    info: {
      title: 'Кухня "Голд" Угловая',
      colors: ["#CDBDAD", "#E1EBF7"],
      properties: [
        { property: "Габариты", value: "2600x700x2100" },
        { property: "Корпус", value: "ЛДСП Egger" },
        { property: "Фасад", value: "МДФ Дуб Молочный" },
        { property: "Фурнитура", value: "Hettich" },
      ],
      price: "28400",
    },
  },
  {
    // SOLID
    images: [
      {
        src: solidKitchenMain,
        isVertical: true,
      },
      {
        src: solidKitchenAngle2,
        isVertical: true,
      },
      {
        src: solidKitchenAngleMain,
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
  // LATTE
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
    // FUTURISTIC
    images: [
      {
        src: futureKitchenBottom,
      },
      {
        src: futureKitchenTop,
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
    // STANDARD
    images: [
      {
        src: standardKitchenFullsize,
      },
      {
        src: standardKitchenAngled,
      },
    ],
    info: {
      title: 'Кухня "Стандарт" Прямая',
      colors: ["#86958E", "#21262C", "#c0bcc3"],
      properties: [
        { property: "Габариты", value: "1800x500x2200" },
        { property: "Корпус", value: "ЛДСП Egger" },
        { property: "Фасад", value: "МДФ" },
        { property: "Фурнитура", value: "Boyard (Китай)" },
      ],
      price: "28400",
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
    // MINI
    images: [
      {
        src: miniKitchenMain,
      },
      {
        src: miniKitchenFront,
        isVertical: true,
      },
      {
        src: miniKitchenLong,
      },
    ],
    info: {
      title: 'Кухня "Мини" c островком',
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
    // NORWAY
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

export default products;

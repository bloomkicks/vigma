import type { ProductProps } from "../types/products";

// Barhat
const barhat1 = "barhat/fullsize.jpg";
const barhat2 = "barhat/longside.jpg";
const barhat3 = "barhat/zoomed-in.jpg";

// Modern
const modern1 = "modern/zoomed-out.jpg";
const modern2 = "modern/fullsize.jpg";
const modern3 = "modern/zoomed-in.jpg";

// Gold
const gold1 = "gold/longside.jpg";
const gold2 = "gold/angled.jpg";
const gold3 = "gold/furniture.jpg";

// Winter
const winter1 = "winter/fullsize.jpg";
const winter2 = "winter/furniture.jpg";
const winter3 = "winter/shelfs.jpg";

// Econom
const econom1 = "econom/fullsize.jpg";
const econom2 = "econom/angled.jpg";

// Quartz
const quartz1 = "quartz/fullsize.jpeg";
const quartz2 = "quartz/angled.jpeg";

// Brusnika
const brusnika1 = "brusnika/longside.jpeg";
const brusnika2 = "brusnika/angled.jpeg";

// Mini
const mini1 = "mini/fullsize.jpeg";
const mini2 = "mini/zoomed-in.jpeg";
const mini3 = "mini/zoomed-out.jpeg";

// Solid
const solid1 = "solid/fullsize.jpeg";
const solid2 = "solid/angled.jpeg";
const solid3 = "solid/zoomed-out.jpeg";

// Sky
const sky1 = "sky/fullsize.png";
const sky2 = "sky/longside.png";
const sky3 = "sky/furniture.png";

// Fair
const fair1 = "fair/fullsize.png";
const fair2 = "fair/furniture.png";
const fair3 = "fair/table.png";

// Fordge
const forge1 = "forge/fullsize.png";
const forge2 = "forge/longside.png";
const forge3 = "forge/angled.png";

// Master
const master1 = "master/fullsize.png";
const master2 = "master/angled.png";
const master3 = "master/island.png";

// Pink
const pink1 = "pink/fullsize.png";
const pink2 = "pink/longside.png";
const pink3 = "pink/angled.png";

// Shine
const shine1 = "shine/angled.png";
const shine2 = "shine/longside.png";
const shine3 = "shine/furniture.png";

// Standard
const standard1 = "standard/angled.png";
const standard2 = "standard/longside.png";
const standard3 = "standard/fridge.png";

// Futuristic
const futuristic1 = "futuristic/furniture.jpg";
const futuristic2 = "futuristic/shelfs.jpg";
const futuristic3 = "futuristic/zoomed-out.jpg";

// Explit
const explit1 = "explit/fullsize.jpeg";
const explit2 = "explit/zoomed-out.jpeg";

export const mainProducts: ProductProps[] = [
  {
    // Barhat
    images: [
      {
        src: barhat1,
      },
      {
        src: barhat2,
        isHorizontal: true,
      },
      {
        src: barhat3,
      },
    ],
    info: {
      title: 'Кухня "Бархарт" Прямая',
      colors: ["#0C0C0C", "#4A494F", "#615049"],
      price: "28400",
    },
  },
  {
    // Pink
    images: [
      {
        src: pink1,
      },
      {
        src: pink2,
      },
      {
        src: pink3,
      },
    ],
    info: {
      title: 'Кухня "Пинк" Угловая',
      colors: ["#A18E87", "#C2C3C0", "#B2A489"],
      price: "28400",
    },
  },
  {
    // Master
    images: [
      {
        src: master1,
      },
      {
        src: master2,
      },
      {
        src: master3,
      },
    ],
    info: {
      title: 'Кухня "Мастер" Угловая',
      colors: ["wood-#F6F8B7-#A78663", "#3E3C3B", "#CCC3C2"],
      price: "28400",
    },
  },
  {
    // Modern
    images: [
      {
        src: modern1,
      },
      {
        src: modern2,
      },
      {
        src: modern3,
      },
    ],
    info: {
      title: 'Кухня "Модерн" с островком',
      colors: ["#1D1D1D", "#9C876C"],
      price: "28400",
    },
  },
];

const products: ProductProps[] = [
  ...mainProducts,
  {
    // Fordge
    images: [
      {
        src: forge1,
      },
      {
        src: forge2,
      },
      {
        src: forge3,
      },
    ],
    info: {
      title: 'Кухня "Фордж" Угловая',
      colors: ["wood-#D8C3A6-#B4A485", "#385053", "light-#F6F8B7"],
      price: "28400",
    },
  },
  {
    // Sky
    images: [
      {
        src: sky1,
      },
      {
        src: sky2,
      },
      {
        src: sky3,
      },
    ],
    info: {
      title: 'Кухня "Скай" Угловая',
      colors: ["#F2EADF", "wood-#BB9872-#8E6143", "#E1CFBF"],
      price: "28400",
    },
  },
  {
    // Shine
    images: [
      {
        src: shine1,
      },
      {
        src: shine2,
      },
      {
        src: shine3,
      },
    ],
    info: {
      title: 'Кухня "Шайн" Угловая',
      colors: ["#A7947D", "wood-#E0B896-#A47E60", "light-#E3C9B0"],
      price: "28400",
    },
  },
  {
    // Fair
    images: [
      {
        src: fair1,
      },
      {
        src: fair2,
      },
      {
        src: fair3,
      },
    ],
    info: {
      title: 'Кухня "Фэер" Прямая',
      colors: ["#33414A", "#E5EEEB", "#92A5B1"],
      price: "28400",
    },
  },
  {
    // Standard
    images: [
      {
        src: standard1,
      },
      {
        src: standard2,
      },
      {
        src: standard3,
      },
    ],
    info: {
      title: 'Кухня "Стандарт" Угловая',
      colors: ["#86958E", "#21262C", "#c0bcc3"],
      price: "28400",
    },
  },
  {
    // Solid
    images: [
      {
        src: solid1,
      },
      {
        src: solid2,
      },
      {
        src: solid3,
      },
    ],
    info: {
      title: 'Кухня "Солид" Угловая',
      price: "34376",
      colors: [
        "#746d71",
        "repeating-linear-gradient(90deg, #733617, #965632 3px)",
      ],
    },
  },
  {
    // Winter
    images: [
      {
        src: winter1,
      },
      {
        src: winter2,
      },
      {
        src: winter3,
      },
    ],
    info: {
      title: 'Кухня "Винтер" Прямая',
      colors: ["#E4E9E5", "#84847A", "#E8C399"],
      price: "28400",
    },
  },
  {
    // Gold
    images: [
      {
        src: gold1,
      },
      {
        src: gold2,
      },
      {
        src: gold3,
      },
    ],
    info: {
      title: 'Кухня "Голд" Угловая',
      colors: ["#CDBDAD", "#E1EBF7"],
      price: "28400",
    },
  },
  {
    // Econom
    images: [
      {
        src: econom1,
      },
      {
        src: econom2,
      },
    ],
    info: {
      title: 'Кухня "Эконом" Прямая',
      colors: ["#86958E", "#21262C", "#c0bcc3"],
      price: "28400",
    },
  },
  {
    // Brusnika
    images: [
      {
        src: brusnika1,
      },
      {
        src: brusnika2,
      },
    ],
    info: {
      title: 'Кухня "Брусника" Угловая',
      price: "30610",
      colors: [
        "#fcfaee",
        "linear-gradient(45deg, #bb2725 30%, #c26267 50%, #bb2725 65%)",
      ],
    },
  },
  {
    // Mini
    images: [
      {
        src: mini1,
      },
      {
        src: mini2,
      },
      {
        src: mini3,
      },
    ],
    info: {
      title: 'Кухня "Мини" c островком',
      price: "33870",
      colors: ["#747675", "#c4baa4", "#644028"],
    },
  },
  {
    // Explit
    images: [
      {
        src: explit1,
        isHorizontal: true,
      },
      {
        src: explit2,
      },
    ],
    info: {
      title: 'Кухня "Эксплит" Прямая',
      price: "19400",
      colors: ["#c6bbb7", "#141614"],
    },
  },
  {
    // Futuristic
    images: [
      {
        src: futuristic1,
        isHorizontal: true,
      },
      {
        src: futuristic2,
        isHorizontal: true,
      },
      {
        src: futuristic3,
        isHorizontal: true,
      },
    ],
    info: {
      title: 'Кухня "Футуристик" Прямая',
      price: "29875",
      colors: ["#b8b19f", "#353444"],
    },
  },
  {
    // Quartz
    images: [
      {
        src: quartz1,
      },
      {
        src: quartz2,
      },
    ],
    info: {
      title: 'Кухня "Кварц" Угловая',
      price: "41300",
      colors: ["#a3bec5", "#6b5851"],
    },
  },
];

export default products;

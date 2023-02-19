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
const quartz1 = "quartz/fullsize.jpg";
const quartz2 = "quartz/angled.jpg";

// Brusnika
const brusnika1 = "brusnika/longside.jpg";
const brusnika2 = "brusnika/angled.jpg";

// Mini
const mini1 = "mini/fullsize.jpg";
const mini2 = "mini/zoomed-in.jpg";
const mini3 = "mini/zoomed-out.jpg";

// Solid
const solid1 = "solid/fullsize.jpg";
const solid2 = "solid/angled.jpg";
const solid3 = "solid/zoomed-out.jpg";

// Sky
const sky1 = "sky/fullsize.jpg";
const sky2 = "sky/longside.jpg";
const sky3 = "sky/furniture.jpg";

// Fair
const fair1 = "fair/fullsize.jpg";
const fair2 = "fair/furniture.jpg";
const fair3 = "fair/table.jpg";

// Fordge
const forge1 = "forge/fullsize.jpg";
const forge2 = "forge/longside.jpg";
const forge3 = "forge/angled.jpg";

// Master
const master1 = "master/fullsize.jpg";
const master2 = "master/angled.jpg";
const master3 = "master/island.jpg";

// Pink
const pink1 = "pink/fullsize.jpg";
const pink2 = "pink/longside.jpg";
const pink3 = "pink/angled.jpg";

// Shine
const shine1 = "shine/angled.jpg";
const shine2 = "shine/longside.jpg";
const shine3 = "shine/furniture.jpg";

// Standard
const standard1 = "standard/angled.jpg";
const standard2 = "standard/longside.jpg";
const standard3 = "standard/fridge.jpg";

// Futuristic
const futuristic1 = "futuristic/furniture.jpg";
const futuristic2 = "futuristic/shelfs.jpg";
const futuristic3 = "futuristic/zoomed-out.jpg";

// Explit
const explit1 = "explit/fullsize.jpg";
const explit2 = "explit/zoomed-out.jpg";

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
      colors: ["wood-#A88879-#6C5952", "#0C0C0C", "#6F717D"],
      price: "62.490",
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
      colors: ["#D2BFC3", "#F6F6F6", "light-#DBC892-#CEBA87"],
      price: "42.490",
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
      colors: ["wood-#F6E8B7-#A78663", "#3E3C3B", "#EFE3E3"],
      price: "52.490",
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
      colors: ["wood-#B1A396-#826F60", "light-#222222-#171612"],
      price: "62.490",
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
      colors: ["wood-#D8C3A6-#B4A485", "#385053"],
      price: "45.490",
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
      colors: ["wood-#BB9872-#8E6143", "#F2EADF", "#E1CFBF"],
      price: "42.490",
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
      colors: ["wood-#E0B896-#A47E60", "#D6CEC7", "light-#EACDA9-#EFE4B8"],
      price: "45.490",
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
      price: "42.490",
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
      price: "40.490",
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
        isHorizontal: true,
      },
    ],
    info: {
      title: 'Кухня "Солид" Угловая',
      price: "40.490",
      colors: ["wood-#733617-#965632", "#746d71"],
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
      colors: ["wood-#D4B596-#C2A482", "#E4E9E5", "#84847A"],
      price: "38.490",
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
      price: "42.490",
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
      price: "38.490",
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
      price: "40.490",
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
      price: "42.490",
      colors: ["wood-#8D694F-#634938", "#747675", "#c4baa4"],
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
      price: "40.490",
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
      price: "40.490",
      colors: ["#A49C8F", "#353434", "light-#7C7FC2-#9Fa7eF"],
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
      price: "42.490",
      colors: ["wood-#8C7F92-#6F5E43", "#BABABF"],
    },
  },
];

export default products;

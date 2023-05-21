import type { ProductProps } from "../types/products";

// Art
const art1 = "art/fullsize.jpg";
const art2 = "art/angled.jpg";
const art3 = "art/zoomed-out.jpg";

// Play
const play1 = "play/fullsize.jpg";
const play2 = "play/angled.jpg";
const play3 = "play/zoomed-out.jpg";

// Vast
const vast1 = "vast/fullsize.jpg";
const vast2 = "vast/angled.webp";
const vast3 = "vast/zoomed-out.webp";

// Barhat
const barhat1 = "barhat/fullsize.jpg";
const barhat2 = "barhat/longside.jpg";
const barhat3 = "barhat/zoomed-in.jpg";

// Modern
const modern1 = "modern/fullsize.jpg";
const modern2 = "modern/zoomed-in.jpg";
const modern3 = "modern/zoomed-out.jpg";

// Gold
const gold1 = "gold/longside.jpg";
const gold2 = "gold/angled.webp";
const gold3 = "gold/furniture.webp";

// Winter
const winter1 = "winter/fullsize.jpg";
const winter2 = "winter/furniture.webp";
const winter3 = "winter/shelfs.webp";

// Econom
const econom1 = "econom/fullsize.webp";
const econom2 = "econom/angled.webp";

// Quartz
const quartz1 = "quartz/fullsize.webp";
const quartz2 = "quartz/angled.webp";

// Brusnika
const brusnika1 = "brusnika/longside.webp";
const brusnika2 = "brusnika/angled.webp";

// Mini
const mini1 = "mini/fullsize.jpg";
const mini2 = "mini/zoomed-in.webp";
const mini3 = "mini/zoomed-out.webp";

// Solid
const solid1 = "solid/fullsize.webp";
const solid2 = "solid/angled.webp";
const solid3 = "solid/zoomed-out.webp";

// Sky
const sky1 = "sky/fullsize.webp";
const sky2 = "sky/longside.webp";
const sky3 = "sky/furniture.webp";

// Fair
const fair1 = "fair/fullsize.webp";
const fair2 = "fair/furniture.webp";
const fair3 = "fair/table.webp";

// Fate
const fate1 = "fate/fullsize.jpg";
const fate2 = "fate/longside.webp";
const fate3 = "fate/angled.webp";

// Master
const master1 = "master/fullsize.jpg";
const master2 = "master/angled.jpg";
const master3 = "master/island.jpg";

// Pink
const pink1 = "pink/fullsize.jpg";
const pink2 = "pink/longside.jpg";
const pink3 = "pink/angled.jpg";

// Forge
const forge1 = "forge/angled.webp";
const forge2 = "forge/longside.webp";
const forge3 = "forge/furniture.webp";

// Standard
const standard1 = "standard/angled.webp";
const standard2 = "standard/longside.webp";
const standard3 = "standard/fridge.webp";

// Futuristic
const futuristic1 = "futuristic/furniture.webp";
const futuristic2 = "futuristic/shelfs.webp";
const futuristic3 = "futuristic/zoomed-out.webp";

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
      price: "64.500",
      discount: 50,
    },
  },
  {
    // Art
    images: [
      {
        src: art1,
      },
      {
        src: art2,
      },
      {
        src: art3,
      },
    ],
    info: {
      title: 'Кухня "Арт" с островком',
      price: "69.500",
    },
  },
  {
    // Play
    images: [
      {
        src: play1,
      },
      {
        src: play2,
      },
      {
        src: play3,
        isHorizontal: true,
      },
    ],
    info: {
      title: 'Кухня "Плэй" Угловая',
      price: "74.500",
      discount: 50,
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
      price: "64.500",
    },
  },
];

const products: ProductProps[] = [
  ...mainProducts,
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
      price: "59.500",
      discount: 50,
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
      price: "59.500",
    },
  },
  {
    // Vast
    images: [
      {
        src: vast1,
      },
      {
        src: vast2,
      },
      {
        src: vast3,
      },
    ],
    info: {
      title: 'Кухня "Васт" Угловая',
      price: "64.500",
    },
  },
  {
    // Fate
    images: [
      {
        src: fate1,
      },
      {
        src: fate2,
      },
      {
        src: fate3,
      },
    ],
    info: {
      title: 'Кухня "Фэйт" Угловая',
      colors: ["wood-#D8C3A6-#B4A485", "#385053"],
      price: "59.500",
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
      price: "54.500",
      discount: 50,
    },
  },
  {
    // Forge
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
      colors: ["wood-#E0B896-#A47E60", "#D6CEC7", "light-#EACDA9-#EFE4B8"],
      price: "59.500",
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
      price: "59.500",
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
      price: "54.500",
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
      price: "59.500",
      colors: ["wood-#733617-#965632", "#746d71"],
      discount: 50,
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
      price: "54.500",
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
      price: "59.500",
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
      price: "49.500",
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
      price: "59.500",
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
      price: "54.500",
      colors: ["wood-#8D694F-#634938", "#747675", "#c4baa4"],
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
      price: "59.500",
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
      price: "64.500",
      colors: ["wood-#8C7F92-#6F5E43", "#BABABF"],
    },
  },
];

export default products;

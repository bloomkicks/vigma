const parentFolder = "/works-assets/";

// ANGLED KITCHEN
const inYanKitchenHorizontal = "kitchen/horizontal.jpg";
const inYanKitchenInsides = "kitchen/with insides.jpg";

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
const futureKitchenFridge = "kitchen details/fridge.jpg";
const futureKitchenTable = "kitchen details/table.jpg";
const futureKitchenTop = "kitchen details/top.jpg";

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

export const firstWorks = [
  {
    photos: [
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
    name: 'Кухня "Латте"',
    description: ["Корпус: ЛДСП Влагостойкий", "Фасад: МДФ Крашенный"],
    colors: ["#cdcbcc", "#7d665e"],
    query: {
      type: "kitchen",
      shape: "straight",
      material: "ldsp+mdf",
    },
  },
  {
    photos: [
      {
        src: bed,
        isVertical: true,
      },
      {
        src: desk,
        isVertical: true,
      },
    ],
    name: 'Детская "Уют"',
    description: ["Фактура: ЛДСП"],
    colors: [
      "#c4c2b6",
      "repeating-linear-gradient(-45deg, #aca89c, #786859 3px)",
    ],
    query: {
      type: "child",
      material: "ldsp",
    },
  },
];

const works = [
  ...firstWorks,
  {
    photos: [
      {
        src: redKitchenLeft,
        isVertical: true,
      },
      {
        src: redKitchenRight,
        isVertical: true,
      },
    ],
    name: 'Кухня "Брусника"',
    description: ["Фактура: ЛДСП + МДФ", "Фасад: крашенный"],
    colors: [
      "#fcfaee",
      "linear-gradient(45deg, #bb2725 30%, #c26267 50%, #bb2725 65%)",
    ],
    query: {
      type: "kitchen",
      shape: "angled",
      material: "ldsp+lsdp+mdf",
    },
  },
  {
    photos: [
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
    name: 'Кухня "Норвегия"',
    description: ["Корпус: ЛДСП Влагостойкий", "Фасад: МДФ Крашенный"],
    colors: [
      "#b8bab9",
      "#41454e",
      "repeating-linear-gradient(90deg, #a37452, #894f20 3px)",
    ],
    query: {
      type: "kitchen",
      shape: "angled",
      material: "lsdp+mdf",
    },
  },
  {
    photos: [
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
    name: 'Кухня "Эксплит"',
    description: ["Корпус: ЛДСП Влагостойкий", "Фасад: МДФ Крашенный"],
    colors: ["#c6bbb7", "#141614"],
    query: {
      type: "kitchen",
      shape: "straight",
      material: "lsdp+mdf",
    },
  },
  {
    photos: [
      {
        src: futureKitchenFridge,
        isVertical: true,
      },
      {
        src: futureKitchenTop,
      },
      {
        src: futureKitchenTable,
      },
    ],
    name: 'Кухня "Футуристик"',
    description: ["Фактура: ЛДСП + МДФ", "Фасад: крашенный"],
    colors: ["#b8b19f", "#353444"],
    query: {
      type: "kitchen",
      shape: "angled",
      material: "lsdp+mdf",
    },
  },
  {
    photos: [
      {
        src: modernKitchenMain,
        isVertical: true,
      },
      {
        src: modernKitchenFront,
        isVertical: true,
      },
      {
        src: modernKitchenLong,
      },
    ],
    name: 'Кухня "Модерн"',
    description: ["Корпус: ЛДСП Влагостойкий", "Фасад: МДФ Крашенный"],
    colors: ["#747675", "#c4baa4", "#644028"],
    query: {
      type: "kitchen",
      shape: "island",
      material: "lsdp+mdf",
    },
  },
  {
    photos: [
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
    name: 'Кухня "Сафари"',
    description: ["Корпус: ЛДСП Влагостойкий", "Фасад: МДФ Крашенный"],
    colors: [
      "repeating-linear-gradient(90deg, #b18a3b, #a37931 3px )",
      "#c2d5db",
      "#0b151f",
    ],
    query: {
      type: "kitchen",
      shape: "angled",
      material: "lsdp+mdf",
    },
  },
  {
    photos: [
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
    name: 'Кухня "Солид"',
    description: ["Корпус: ЛДСП Влагостойкий", "Фасад: МДФ Крашенный"],
    colors: [
      "linear-gradient(125deg, #746d71 25%, #cfcfcf 45%, #746d71 60%)",
      "repeating-linear-gradient(90deg, #733617, #965632 3px)",
    ],
    query: {
      type: "kitchen",
      shape: "angled",
      material: "lsdp+mdf",
    },
  },
  {
    photos: [
      {
        src: inYanKitchenHorizontal,
      },
      {
        src: inYanKitchenInsides,
        isVertical: true,
      },
    ],
    name: 'Кухня "Инь-Янь"',
    description: ["Фактура: ЛДСП + МДФ", "Фасад: крашенный"],
    colors: [
      "#EEE9E5",
      "repeating-linear-gradient(90deg, #2e2926, #1F1D1E 3px)",
    ],
    query: {
      type: "kitchen",
      shape: "angled",
      material: "ldsp+lsdp+mdf",
    },
  },
  {
    photos: [
      {
        src: lessLimeKitchenLeft,
        isVertical: true,
      },
      {
        src: lessLimeKitchenRight,
        isVertical: true,
      },
    ],
    name: 'Кухня "Лайм"',
    description: ["Фактура: МДФ", "Фасад: крашенный"],
    colors: [
      "linear-gradient(150deg, #e1fd5b 50%, #ffffff)",
      "#dfe1d4",
      "linear-gradient(45deg, #4f3d2b 20%, #86634d 50%, #4f3d2b)",
    ],
    query: {
      type: "kitchen",
      shape: "angled",
      material: "lsdp+mdf",
    },
  },
];

works.forEach((work, index) => {
  work.photos.forEach((photo) => (photo.src = parentFolder + photo.src));
});

export default works;

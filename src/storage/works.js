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

// LIME KITCHEN
const limeKitchenCurved = "lime kitchen/curved.jpeg";
const limeKitchenOven = "lime kitchen/oven.jpeg";

// FUTURE KITCHEN
const futureKitchenFridge = "kitchen details/fridge.jpg";
const futureKitchenTable = "kitchen details/table.jpg";
const futureKitchenTop = "kitchen details/top.jpg";

const works = [
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
    name: "Угловая Кухня Инь-Янь",
    description: ["Фактура: ЛДСП + МДФ", "Фасад: крашенный"],
    colors: [
      "#EEE9E5",
      "repeating-linear-gradient(90deg, #2e2926, #1F1D1E 3px)",
    ],
    query: {
      type: "kitchen",
      shape: "angled",
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
    name: "Детская Комната Уют",
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
    name: "Кухня Брусника",
    description: ["Фактура: ЛДСП + МДФ", "Фасад: крашенный"],
    colors: [
      "#fcfaee",
      "linear-gradient(45deg, #bb2725 30%, #c26267 50%, #bb2725 65%)",
    ],
    query: {
      type: "kitchen",
      shape: "angled",
      material: "ldsp+mdf",
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
    name: "Кухня Лайм",
    description: ["Фактура: МДФ", "Фасад: крашенный"],
    colors: [
      "linear-gradient(150deg, #e1fd5b 50%, #ffffff)",
      "#dfe1d4",
      "linear-gradient(45deg, #4f3d2b, #86634d, #4f3d2b)",
    ],
    query: {
      type: "kitchen",
      shape: "angled",
      material: "mdf",
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
    name: "Кухня Футуристик",
    description: ["Фактура: ЛДСП + МДФ", "Фасад: крашенный"],
    colors: ["#b8b19f", "#353444"],
    query: {
      type: "kitchen",
      shape: "linear",
      material: "ldsp+mdf",
    },
  },
];

works.forEach((work, index) => {
  work.photos.forEach((photo) => (photo.src = parentFolder + photo.src));
});

export default works;

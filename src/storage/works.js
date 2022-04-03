const parentFolder = "/works-assets/";

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

export const firstWorks = [
  {
    id: Math.random(),
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
    description: ["Корпус: ЛДСП Влагостойкий", "Фасад: МДФ Плёнка"],
    colors: ["#cdcbcc", "#7d665e"],
    query: {
      type: "kitchen",
      shape: "straight",
      material: "ldsp+mdf",
    },
  },
  {
    // SOLID
    id: Math.random(),
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
    description: ["Корпус: ЛДСП Влагостойкий", "Фасад: МДФ Плёнка"],
    colors: [
      "#746d71",
      "repeating-linear-gradient(90deg, #733617, #965632 3px)",
    ],
    query: {
      type: "kitchen",
      shape: "angled",
      material: "lsdp+mdf",
    },
  },
];

const works = [
  ...firstWorks,
  {
    // FUTURISTIC
    id: Math.random(),
    photos: [
      {
        src: futureKitchenTop,
      },
      {
        src: futureKitchenBottom,
      },
    ],
    name: 'Кухня "Футуристик"',
    description: ["Корпус: ЛДСП Egger", "Фасад: МДФ", "Фурнитура: Hettich"],
    colors: ["#b8b19f", "#353444"],
    query: {
      type: "kitchen",
      shape: "angled",
      material: "lsdp+mdf",
    },
    style: {
      height: "350px",
    },
    imgContainerStyle: {
      height: "65%",
    },
  },
  {
    id: Math.random(),
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
    description: ["Корпус: ЛДСП", "Фасад: МДФ Плёнка"],
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
    // MODERN
    id: Math.random(),
    photos: [
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
    name: 'Кухня "Модерн"',
    description: [
      "Корпус: ЛДСП Lamarty",
      "Фасад: Mattelux Super",
      "Фурнитура: Hettich",
    ],
    colors: ["#747675", "#c4baa4", "#644028"],
    query: {
      type: "kitchen",
      shape: "island",
      material: "lsdp+mdf",
    },
    style: {
      height: "350px",
    },
    imgContainerStyle: {
      height: "60%",
    },
  },
  {
    id: Math.random(),
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
    description: ["Корпус: ЛДСП Влагостойкий", "Фасад: МДФ Плёнка"],
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
    style: {
      height: "350px",
    },
  },
  {
    // EXPLIT
    id: Math.random(),
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
    description: ["Корпус: ЛДСП Влагостойкий", "Фасад: МДФ Плёнка"],
    colors: ["#c6bbb7", "#141614"],
    query: {
      type: "kitchen",
      shape: "straight",
      material: "lsdp+mdf",
    },
  },
  {
    // SAFARI
    id: Math.random(),
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
    description: ["Корпус: ЛДСП Влагостойкий", "Фасад: МДФ"],
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
    // QUARTZ
    id: Math.random(),
    photos: [
      {
        src: quartzKitchenFront,
        isVertical: true,
      },
      {
        src: quartzKitchenSide,
        isVertical: true,
      },
    ],
    name: 'Кухня "Кварц"',
    description: ["Корпус: ЛДСП", "Фасад: МДФ Софт Крем", "Фурнитура: Hettich"],
    query: {
      type: "kitchen",
      shape: "angled",
      material: "ldsp+mdf",
    },
    colors: ["#a3bec5", "#6b5851"],
    style: {
      height: "300px",
    },
    imgContainerStyle: {
      height: "70%",
    },
  },
  {
    // TIMBER
    id: Math.random(),
    photos: [
      {
        src: timberClosetClosed,
      },
      {
        src: timberClosetOpen,
      },
    ],
    name: 'Шкаф "Тимбер"',
    colors: ["#ada2a0", "#6b4b38", "#c0bcc3"],
    description: ["Корпус: ЛДСП Egger","Фасад: МДФ Дуб Молочный", ],
    query: {
      type: "closet",
      material: "ldsp+mdf",
    },
  },
  {
    // UYT
    id: Math.random(),
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
    description: ["Корпус: ЛДСП", "Фасад: МДФ"],
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
    // LIME
    id: Math.random(),
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
    description: ["Корпус: ЛДСП", "Фасад: МДФ Плёнке"],
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

import { getMetaOrders, getBundle } from "./quiz-functions";
const categories = {
  question: "Выбирете категорию мебели",
  path: "/order-assets/starting_items",
  queryType: "?category",
  names: {
    kitchen: "Кухни",
    closet: "Шкафы",
    child: "Детская мебель",
    bath: "Мебель для Ванной",
    trade: "Торговая мебель",
    office: "Офисная мебель",
  },
};

// KITCHEN
const kitchenShapes = {
  title: "Форма Кухни",
  question: "Выбирете форму мебели",
  path: "/order-assets/kitchen/shape",
  queryType: "&shape",
  names: {
    linear: "Прямая",
    angled: "Угловая",
    "u-shaped": "П-образная",
  },
};

const tableMaterials = {
  title: "Столешница",
  question: "Выбирете материалы столешницы",
  path: "/order-assets/kitchen/tablet",
  queryType: "&tablet",
  names: {
    "stone-acryl": "Искусственный Акрил",
    massive: "Массив",
    troya: "ДСП Троя",
    agra: "ДСП Агра",
    quartz: "Искусственный Кварц",
  },
};

const kitchenBundle = {
  title: "Кухня",
  question: "Выбирете составляющие кухни",
  path: "/order-assets/kitchen",
  names: {
    shape: "Форма",
    front: "Фасад",
    body: "Корпус",
    tablet: "Столешница",
  },
};

// CLOSET
const closetShapes = {
  title: "Тип",
  question: "Выбирете тип шкафа",
  path: "/order-assets/closet/shape",
  queryType: "&shape",
  names: {
    kupe: "Шкаф-Купе",
    entry: "Прихожая",
    wardrobe: "Гардеробная",
  },
};

const closetBundle = {
  title: "Шкаф",
  question: "Выбирете составляющие шкафа",
  path: "/order-assets/closet",
  names: {
    shape: "Тип Шкафа",
    front: "Фасад",
    body: "Корпус",
  },
};

// CHILD
const childShapes = {
  title: "Категория Детской мебели",
  question: "Выбирете категорию детской мебели",
  queryType: "&shape",
  path: "/order-assets/child/shape",
  names: {
    table: "Столики",
    bed: "Кровати",
    wall: "Детские Стенки",
  },
};

const childBundle = {
  title: "Детская мебель",
  question: "Выбирете составляющие детской мебели",
  path: "/order-assets/child",
  names: {
    shape: "Категория",
    front: "Фасад",
    body: "Корпус",
  },
};

// OFFICE
const officeShapes = {
  title: "Категория Офисной мебели",
  question: "Выбирете категорию офисной мебели",
  queryType: "&shape",
  path: "/order-assets/office/shape",
  names: {
    table: "Столы",
    shelf: "Стеллажи",
    wardrobe: "Гардеробные",
  },
};

const officeBundle = {
  title: "Офисная мебель",
  question: "Выбирете составляющие офисной мебели",
  path: "/order-assets/office",
  names: {
    shape: "Категория",
    front: "Фасад",
    body: "Корпус",
  },
};

// TRADE
const tradeShapes = {
  title: "Категория Торговой мебели",
  question: "Выбирете категорию торговой мебели",
  queryType: "&shape",
  path: "/order-assets/trade/shape",
  names: {
    island: "Островки",
    stall: "Прилавки",
    shelf: "Стеллажи",
  },
};

const tradeBundle = {
  title: "Торговая мебель",
  question: "Выбирете составляющие торговой мебели",
  path: "/order-assets/trade",
  names: {
    shape: "Категория",
    front: "Фасад",
    body: "Корпус",
  },
};

// BATH
const bathShapes = {
  title: "Категория мебели для Ванной",
  question: "Выбирете мебель для ванной",
  queryType: "&shape",
  path: "/order-assets/bath/shape",
  names: {
    penal: "Пенал",
    closet: "Шкаф",
    tablet: "Столешница"
  },
};

const bathBundle = {
  title: "Мебель для Ванной",
  question: "Выбирете составляющие для мебели в ванной",
  path: "/order-assets/bath",
  names: {
    shape: "Категория",
    front: "Фасад",
    body: "Корпус",
  },
};

// BODY MATERIALS
const bodyMaterials = {
  title: "Корпус",
  question: "Выбирете материалы корпуса",
  path: "/order-assets/materials/body",
  queryType: "&body",
  names: { egger: "ЛДСП Egger", ldsp: "ЛДСП", dsp: "ДСП" },
};

// FRONT MATERIALS
const frontMaterials = {
  title: "Фасад",
  question: "Выбирете материалы фасада",
  path: "/order-assets/materials/front",
  queryType: "&front",
  names: {
    ldsp: "ЛДСП",
    plastic: "Пластик",
    agt: "МДФ AGT",
    acryllic: "Акрил",
    dyed: "МДФ Крашенный",
    tape: "МДФ Плёнка",
    massive: "Массив",
  },
};

const allOrders = {
  category: getMetaOrders(categories),

  materials: {
    front: getMetaOrders(frontMaterials),
    body: getMetaOrders(bodyMaterials),
  },

  kitchen: {
    shape: getMetaOrders(kitchenShapes),
    tablet: getMetaOrders(tableMaterials),
    bundle: getBundle(kitchenBundle),
  },

  closet: {
    shape: getMetaOrders(closetShapes),
    bundle: getBundle(closetBundle),
  },

  child: {
    shape: getMetaOrders(childShapes),
    bundle: getBundle(childBundle),
  },

  office: {
    shape: getMetaOrders(officeShapes),
    bundle: getBundle(officeBundle),
  },

  trade: {
    shape: getMetaOrders(tradeShapes),
    bundle: getBundle(tradeBundle),
  },

  bath: {
    shape: getMetaOrders(bathShapes),
    bundle: getBundle(bathBundle),
  },
};

export default allOrders;

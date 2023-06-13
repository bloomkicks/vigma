export type Category = {
  title: string;
  name: string;
};

const categories: Category[] = [
  {
    title: "Классика",
    name: "classic",
  },
  {
    title: "Модерн",
    name: "modern",
  },
  {
    title: "Светлые кухни",
    name: "bright",
  },
  {
    title: "Тёмные кухни",
    name: "dark",
  },
  {
    title: "Глянцевые кухни",
    name: "gloss",
  },
  {
    title: "Угловые кухни",
    name: "angled",
  },
  {
    title: "Прямые кухни",
    name: "linear",
  },
  {
    title: "С островком",
    name: "island",
  },
  {
    title: "Большие кухни",
    name: "large",
  },
];

export default categories;

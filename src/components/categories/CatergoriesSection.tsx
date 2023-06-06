import Category from "./Category";

const categories: { title: string; imgName: string }[] = [
  {
    title: "Угловые кухни",
    imgName: "angled.jpg",
  },
  {
    title: "Прямые кухни",
    imgName: "linear.jpg",
  },
];

const CategoriesSection = () => {
  return (
    <section className="section-dark pl-[35px] pr-[50px]">
      <h2 className="heading mb-[35px]">
        С нами вы получите кухню, которая идеально отразит ваш стиль и
        предпочтения
      </h2>
      <div className="flex flex-row justify-start items-center overflow-x-scroll overflow-y-visible snap-proximity snap-x pb-2 space-x-[25px] pr-[35px]">
        {categories.map((category, i) => (
          <Category
            title={category.title}
            imgSrc={`/images/categories/${category.imgName}`}
            key={category.imgName}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;

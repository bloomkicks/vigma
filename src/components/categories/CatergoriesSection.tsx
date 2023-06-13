import Category from "./Category";
import categories from "@/data/categories";

const CategoriesSection = () => {
  return (
    <section className="section-dark">
      <h2 className="heading mb-[35px] lg:mb-[56px]">
        С нами вы получите кухню, которая идеально отразит ваш стиль и
        предпочтения
      </h2>
      <div className="mr-[-35px] overscroll flex flex-row justify-start items-center overflow-x-auto overflow-y-visible snap-proximity snap-x pb-2 space-x-[25px] pr-[35px] lg:justify-center lg:flex-wrap lg:space-x-0 lg:mr-[-47px] lg:mb-[-45px]">
        {categories.map((category, i) => (
          <Category
            title={category.title}
            name={category.name}
            imgSrc={`/images/categories/${category.name}.jpg`}
            key={category.name}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;

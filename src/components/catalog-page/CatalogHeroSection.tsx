import SortSelect from "./SortSelect";

const CatalogHeroSection = ({
  onSort,
  selected
}: {
  onSort: (category: any) => void;
  selected: string
}) => {
  return (
    <section className="section-light !pb-[35px] lg:!pb-[76px]">
      <h2 className="heading mb-3 lg:mb-5">Проекты кухонь на любой вкус</h2>
      <p className="leading-[1.5] mb-6 lg:mb-8">
        Готовые проекты кухонь и источник для вдохновения
      </p>
      <SortSelect onSort={onSort} selected={selected} />
    </section>
  );
};

export default CatalogHeroSection;

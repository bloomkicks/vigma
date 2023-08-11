import DesignerBanner from "./DesignerBanner";

const ValuesSection = () => {
  return (
    <section className="section-light">
      <h2 className="heading mb-2.5 lg:mb-9">
        Мы ценим качество, надежность и внимание к деталям
      </h2>
      <div className="lg:flex lg:flex-row lg:justify-center lg:items-start lg:space-x-6">
        <p className="mb-8 leading-[1.5] md:text-center lg:text-left lg:w-[54%] lg:mb-0">
          Наша команда вкладывает душу в каждую кухню, которую мы
          производим. Большой выбор материалов, точность оборудования
          и внимание к деталям гарантируют кухни, которые идеально
          отразят ваш индивидуальный стиль и предпочтения, при этом
          сохранив удобство и функциональность
        </p>
        <DesignerBanner />
      </div>
    </section>
  );
};

export default ValuesSection;

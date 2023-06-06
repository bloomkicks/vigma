import DesignerBanner from "./DesignerBanner";

const ValuesSection = () => {
  return (
    <section className="section-light px-8">
      <h2 className="heading pl-[3px] pr-[13px] mb-2.5">
        Мы ценим качество, надежность и внимание к деталям
      </h2>
      <p className="pl-[3px] pr-[13px] mb-8">
        Наша команда вкладывает душу в каждую кухню, которую мы
        производим. Большой выбор материалов, точность оборудования и
        внимание к деталям гарантируют кухни, которые идеально отразят
        ваш индивидуальный стиль и предпочтения, при этом сохранив
        удобство и функциональность
      </p>
      <DesignerBanner />
    </section>
  );
};

export default ValuesSection;

import Benefit from "./Benefit";

const benefits = [
  {
    iconName: "shape",
    text: "Любые формы и размеры кухни",
  },
  {
    iconName: "time",
    text: "Получите кухню в этот же месяц",
  },
  {
    iconName: "materials",
    text: "1000+ цветов и текстур материала",
  },
  {
    iconName: "contract",
    text: "Работа по договору и 36 месяцев гарантии",
  },
  {
    iconName: "package",
    text: "Доставим и установим вашу кухню в СПБ и ЛО",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-light overscroll !pt-[30px] flex flex-row justiy-start items-end overflow-x-auto snap-x snap-proximity space-x-5 px-[30px] !pb-2.5 md:pb-1.5 bg-white-dark lg:!pt-[58px] lg:!px-8 lg:space-x-8 lg:flex-wrap lg:justify-center lg:!pb-[4px]">
      {benefits.map((benefit) => (
        <Benefit
          text={benefit.text}
          iconSrc={"/images/benefits/" + benefit.iconName + ".svg"}
          key={benefit.iconName}
        />
      ))}
    </section>
  );
};

export default BenefitsSection;
